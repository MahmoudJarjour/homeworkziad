import React from "react";

const Text=()=>{
    

    let text  = " Messages never and  our servers. a. The original words of something written or printed, as opposed to a paraphrase, translation, revision, or condensation. b. The words of a speech appearing in print. c. Words, as of a libretto, that are set to music in a composition. d. Words treated as data by a computer. e. A text message. 2. The body of a printed work as distinct from headings and illustrative matter on a page or from front and back matter in a book. "

    const colors= [ "red" , "blue"];
    const randomColor = () => {
        return colors[(Math.random() * colors.length) >> 0];
      };
        
      return (
        <div>
          {text.split(" ").map(word => {
              if(word === "and")
            return <span style={{ color: randomColor() }}>{`${word} `}</span>;
                else
                    return <span>{`${word} `}</span>
          })}
        </div>
      );
        
}


export default Text;