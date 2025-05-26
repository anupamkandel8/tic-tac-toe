export default function GameOver({ winner }) {
return (
    <div className=" items-center justify-center h-8/10 w-8/10 bg-amber-300  text-2xl font-bold text-blue-700">
        {winner ? `Winner is ${winner}` : "It's a draw!"}

    <button
        className="ml-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition duration-200"
        onClick={() => window.location.reload()}
    >
        Restart Game
    </button>
    </div>
);
}
