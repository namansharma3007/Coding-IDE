import React, { useEffect, useState } from "react";
import SubmissionStats from "../components/SubmissionStats";
import { useUserContext } from "../hooks/useUserContext";
import { getSubmissionDetailsViaUsername, tokenSubmission } from "../api/api";
import redis from "../redis/redis";

const Submissions = () => {
  const { username } = useUserContext();
  const [submissionDetails, setSubmissionDetails] = useState([]);

  useEffect(() => {
    const fetchSubmissionDetails = async () => {
      try {

        const redisSubmissionDetails = await redis.get(`submissions:${username}`);
        if (redisSubmissionDetails) {
          setSubmissionDetails(redisSubmissionDetails);
        } else {

          const response = await getSubmissionDetailsViaUsername(username);
          const submissionDataAllSQL = response?.data?.data;

          const fetchSubmissionDetailsFromAPI = async () => {
            const submissionData = submissionDataAllSQL.map((data) =>
              tokenSubmission(data.submission_token)
            );

            const submissionDataFullAPI = await Promise.all(submissionData);
            const submissionDetailsArray = submissionDataFullAPI.map((data) => data);
            

            await redis.set(`submissions:${username}`, JSON.stringify(submissionDetailsArray));
            setSubmissionDetails(submissionDetailsArray);
          };
          fetchSubmissionDetailsFromAPI();
        }
      } catch (error) {
        console.error(`An error occurred while fetching submission tokens, ${error}`);
      }
    };
    fetchSubmissionDetails();
  }, [username]);

  return (
    <section className="flex flex-col gap-2 w-full p-10 items-center">
      <p className="font-semibold text-xl">Your submissions</p>
      <div className="flex flex-col gap-1 w-[55rem] transition-all shrink mx-2 md:m-0">
        {submissionDetails.map((item, index) => (
          <SubmissionStats key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Submissions;