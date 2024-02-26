function solution(my_string, overwrite_string, s) {
    const overwriteStringLenght = overwrite_string.length;
    const frontString = my_string.substring(0, s);
    const endString = my_string.substring(s + overwriteStringLenght);
    
    return frontString + overwrite_string + endString
}