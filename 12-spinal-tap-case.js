function spinalCase(str) {

  return str.replace(/[\s_]/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  
}
