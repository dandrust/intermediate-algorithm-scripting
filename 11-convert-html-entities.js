function convertHTML(str) {

  // Regular Expressions (regExp) using /.../ insead of "...",
  // escape characters like ' and " with \prefix, use g after
  // final / to indicate global (find all) search.
  str = str.replace(/&/g, "&amp;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/\'/g, "&apos;");
  str = str.replace(/\"/g, "&quot;");

  return str;
}
