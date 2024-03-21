export const CODE_SNIPPETS = {
  javascript: `function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");`,
  python: `def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")`,
  java: `public class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}`,
  cpp: `#include <iostream>\nusing namespace std;\n\nint main(){\n\tcout<<"Hello World!"<<endl;\n\treturn 0;\n}`
};



export const languageId = {
  cpp: 54,
  java: 91,
  javascript: 93,
  python: 92,
};

export const languageName = {
  54: "cpp",
  91:"java",
  93:"javascript",
  92:"python"
}