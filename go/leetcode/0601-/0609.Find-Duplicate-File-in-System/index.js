/**
 * @param {string[]} paths
 * @return {string[][]}
 */

var findDuplicate = function (paths) {
  const contentMap = new Map();

  for (let path of paths) {
    const parts = path.split(" ");
    const dir = parts[0];

    for (let i = 1; i < parts.length; i++) {
      const [fileName, content] = parts[i].split("(");
      const cleanContent = content.slice(0, -1); // Remove closing ')'
      const fullPath = dir + "/" + fileName;

      if (!contentMap.has(cleanContent)) {
        contentMap.set(cleanContent, []);
      }
      contentMap.get(cleanContent).push(fullPath);
    }
  }

  const result = [];
  for (let group of contentMap.values()) {
    if (group.length > 1) {
      result.push(group);
    }
  }

  return result;
};
