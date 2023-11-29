function remove(str){
    str = str.replace(/a/gi, '');
  str = str.replace(/c/gi, '');
  str = str.replace(/z/gi, '');
  return str;
}

console.log(remove("asiczr"));