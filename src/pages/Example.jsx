import { useState } from "react";

const moods = [
  { emoji: "🐼", label: "Panda" },
  { emoji: "🪵", label: "Palm Tree!" },
  { emoji: "🌲", label: "Tree" },
  { emoji: "🐻‍❄️", label: "Ice Bear!~" },
  { emoji: "🌉", label: "Golden gate brdige!" },
  { emoji: "🌴", label: "Tropicc" },
  { emoji: "🏙", label: "Cityy" },
  { emoji: "🐻", label: "Grizz" },
  { emoji: "🌲", label: "tree" },
  { emoji: "🪨", label: "rockk" },
  { emoji: "🌳", label: "tree" },
  { emoji: "🍃", label: "leaf!" },
];

// const outlineColor = "border-blue-200";
const backgroundBoardColor = "bg-white";
const outerOutlineColor = "border-gray-200"
const outlineColor = "border-black";
const hoverColor = "hover:bg-slate-100";
const textColor = "text-black";



export default function Example() {
  const [selectedMood, setSelectedMood] = useState(null);
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className={`w-1/4 border-2 rounded-md ${outerOutlineColor} text-center ${textColor} ${backgroundBoardColor}`}>
          <p className="text-2xl font-bold pt-5">Emoji Aesthetic</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-10 py-5">
            {moods.map((mood) => (
              <button
                key={mood.label}
                className={`h-24 text-4xl border-4 rounded-lg ${hoverColor} ${
                  selectedMood === mood ? outlineColor : ""
                }`}
                onClick={() => setSelectedMood(mood)}
              >
                <span className="sr-only">{mood.label}</span>
                {mood.emoji}
              </button>
            ))}
          </div>
          {selectedMood && (
            <div className="text-center pt-4 h-20 font-bold">
                <p className="text-lg">{selectedMood.label} {selectedMood.emoji}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
