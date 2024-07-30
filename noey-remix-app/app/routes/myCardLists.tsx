import { useState } from "react";

let nextId = 0;

export default function CardLists() {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [position, setPosition] = useState(''); // State for position
    const [cards, setCards] = useState([]);

    function handleClickAdd(n, d, p) {
        console.log("Card Lists", cards);
        setCards((prevCards) => [
            ...prevCards,
            {
                id: nextId++,
                name: n,
                desc: d,
                position: p // Add position to card
            }
        ]);
    }

    function handleViewCard(card) {
        // Display card details in an alert (or you could use a modal or another method)
        alert(`Name: ${card.name}\nPosition: ${card.position}\nDescription: ${card.desc}`);
    }

    return (
        <div>
            <h1>Create Card:</h1>
            <label>Name: </label>
            <input
                name="cName"
                className="border-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /> <br />
            <label>Description: </label>
            <textarea
                name="cDesc"
                rows={4}
                cols={50}
                className="border-2"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            /> <br />
            <label>Position: </label>
            <input
                name="cPosition"
                className="border-2"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
            /> <hr />
            <button
                onClick={() => handleClickAdd(name, desc, position)}
                className="border bg-green-300 h-18 w-20"
            >
                Add Card
            </button>
            <hr />
            <h1>My Card Lists:</h1>
            {cards.length === 0 ? (
                <p>No cards available</p>
            ) : (
                <table className="border-collapse border border-gray-200 w-full">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">ลำดับ</th>
                            <th className="border border-gray-300 p-2">ชื่อ-สกุล</th>
                            <th className="border border-gray-300 p-2">ตำแหน่ง</th>
                            <th className="border border-gray-300 p-2">รายละเอียด</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.map((card, index) => (
                            <tr key={card.id}>
                                <td className="border border-gray-300 p-2">{index + 1}</td>
                                <td className="border border-gray-300 p-2">{card.name}</td>
                                <td className="border border-gray-300 p-2">{card.position}</td>
                                <td className="border border-gray-300 p-2">
                                    <button
                                        onClick={() => handleViewCard(card)}
                                        className="border bg-blue-300 px-2 py-1"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}