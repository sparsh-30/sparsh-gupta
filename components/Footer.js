export default function Footer() {
  return (
    <div className="w-full bg-black">
      <div className="w-5/6 mx-auto py-20 flex justify-evenly items-end ">
        <div className="rounded-xl w-1/2 font-bold text-xl">
          <input
            className="w-10/12 bg-black text-white py-3 px-4 border-[1px] border-white rounded-tl-xl rounded-bl-xl"
            type="text"
            placeholder="Email"
          />
          <button className="bg-white text-black py-3 px-3 border-[1px] border-white rounded-tr-xl rounded-br-xl">
            Submit
          </button>
        </div>
        <div className="flex-col justify-center text-center items-center w-1/2">
          <p>Home</p>
          <p>Work</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}
