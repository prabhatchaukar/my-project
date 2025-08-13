import Headphones from "../assets/headphones.jpg";

const Card = () => {
  return (
    <div className="border p-4 rounded shadow-2xl w-[80%] max-w-[500px]">
      <div className="relative h-60 mb-4">
        <img
          className="absolute w-full h-full object-cover rounded"
          src={Headphones}
          alt="/"
        />
      </div>
      <div>
        <p className="font-semibold">Apple Headphones</p>
        <p className="text-sm pb-2">Price: $298</p>
        <p className="font-thin">
          Apple headphones are known for their premium design, exceptional sound
          quality, and advanced technology. They feature Noise Cancellation,
          Spatial Audio, and a crystal-clear microphone, delivering an
          outstanding experience for music, calls, and gaming. With a
          lightweight design and comfortable fit, they’re perfect for long
          listening sessions.
        </p>
      </div>
    </div>
  );
};

export default Card;
