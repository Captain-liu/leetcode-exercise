/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    if(needle==="")
    {
        return 0;
    }
    if(haystack.length < needle.length)
    {
        return -1;
    }
    let matchCount=needle.length;
    let residx = 0;
    for(let i=0;i<haystack.length;++i)
    {
         if(i+needle.length>haystack.length)
            {
                return -1;
            }
        for(let j=0;j<needle.length;++j)
        {  
           
            let c = haystack[i+j];
            if(c !== needle[j])
            {
               matchCount = needle.length;
                break;
            }
            else
            {
                matchCount--;
                if(matchCount<=0)
                {
                    return i;
                }
            }
        }
        residx++;
    }
    if(residx>=haystack.length)
    {
        return -1;
    }
};

strStr("mississippi","issi");