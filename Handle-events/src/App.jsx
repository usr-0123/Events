import "./App.css";

function App() {
  // function handleClick() {
  //   console.log("Hello")
  // }
  // const handleClickWithMsg = (msg) => {
  //   console.log(msg)
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  
  const handleScroll = (e) => {
    // console.log(e)
    console.log(e.target.scrollTop)
    console.log(e.target.scrollLeft)
  }


    // console.log(e);

    // //method 1
    // console.log(`Hello my first name is ${e.target.fname.value}`)
    // console.log(`Hello my second name is ${e.target.sname.value}`)
    // console.log(`Hello my last name is ${e.target.lname.value}`);

    //Using a string resource
    // console.log(`Hello my first name is ${e.target[0].value}`)
    // console.log(`Hello my second name is ${e.target[1].value}`)
    // console.log(`Hello my last name is ${e.target[2].value}`)
  // }

  return (
    <>
      <h1>Handle events</h1>
      {/* <button type="button" onClick={handleClick}>
        Hello
      </button>
      <button type="button" onClick={() => handleClickWithMsg("This is a funny msg")}>
        Hello With Msg
      </button> */}
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="fname"></label>
        <input type="text" id="fname" placeholder="Enter your first name" />

        <label htmlFor="sname"></label>
        <input type="text" id="sname" placeholder="Enter your second name" />

        <label htmlFor="lname"></label>
        <input type="text" id="lname" placeholder="Enter your last name" />

        <button type="submit">Submit</button>
      </form> */}

      <div
        onScroll={handleScroll}
        style={{
          border: "1px solid black",
          height: "300px",
          padding: "20px",
          overflow: "scroll",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui debitis
        repellendus laborum sed provident minus sunt veritatis repellat
        optio!Aliquid et placeat illum vel perferendis fugiat deleniti optio
        quidolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Adipisci veritatis dignissimos exercitationem facere qui nobis
        voluptatibus voluptate quo quos optio minus itaque reprehenderit nostrum
        dolorem cumque, dolores ex ullam pariatur. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Culpa tempora, iste ea assumenda unde
        dolore tenetur reiciendis voluptas facere, maxime soluta accusantium et
        illum cupiditate esse distinctio enim asperiores sit? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Culpa tempora, iste ea assumenda
        unde dolore tenetur reiciendis voluptas facere, maxime soluta
        accusantium et illum cupiditate esse distinctio enim asperiores sit?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora,
        iste ea assumenda unde dolore tenetur reiciendis voluptas facere, maxime
        soluta accusantium et illum cupiditate esse distinctio enim asperiores
        sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        tempora, iste ea assumenda unde dolore tenetur reiciendis voluptas
        facere, maxime soluta accusantium et illum cupiditate esse distinctio
        enim asperiores sit? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Culpa tempora, iste ea assumenda unde dolore tenetur reiciendis
        voluptas facere, maxime soluta accusantium et illum cupiditate esse
        distinctio enim asperiores sit? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Culpa tempora, iste ea assumenda unde dolore tenetur
        reiciendis voluptas facere, maxime soluta accusantium et illum
        cupiditate esse distinctio enim asperiores sit? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Culpa tempora, iste ea assumenda unde
        dolore tenetur reiciendis voluptas facere, maxime soluta accusantium et
        illum cupiditate esse distinctio enim asperiores sit? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Culpa tempora, iste ea assumenda
        unde dolore tenetur reiciendis voluptas facere, maxime soluta
        accusantium et illum cupiditate esse distinctio enim asperiores sit?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora,
        iste ea assumenda unde dolore tenetur reiciendis voluptas facere, maxime
        soluta accusantium et illum cupiditate esse distinctio enim asperiores
        sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        tempora, iste ea assumenda unde dolore tenetur reiciendis voluptas
        facere, maxime soluta accusantium et illum cupiditate esse distinctio
        enim asperiores sit?
      </div>
    </>
  );
}

export default App;
