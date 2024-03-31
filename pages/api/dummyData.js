// pages/api/dummyData.js

export default (req, res) => {
    const dummyData = [
        {
            id: 1,
            question: "What is the capital of Australia?",
            answer: "Canberra"
        },
        {
            id: 2,
            question: "Who wrote 'To Kill a Mockingbird'?",
            answer: "Harper Lee"
        },
        {
            id: 3,
            question: "What is the largest ocean in the world?",
            answer: "Pacific Ocean"
        },
        {
            id: 4,
            question: "Who painted the Sistine Chapel ceiling?",
            answer: "Michelangelo"
        },
        {
            id: 5,
            question: "What is the chemical symbol for gold?",
            answer: "Au"
        },
        {
            id: 6,
            question: "Which planet is known as the 'Red Planet'?",
            answer: "Mars"
        },
        {
            id: 7,
            question: "What is the national animal of China?",
            answer: "Giant Panda"
        },
        {
            id: 8,
            question: "Who was the first woman to fly solo across the Atlantic Ocean?",
            answer: "Amelia Earhart"
        },
        {
            id: 9,
            question: "What is the highest mountain in Africa?",
            answer: "Mount Kilimanjaro"
        },
        {
            id: 10,
            question: "Who wrote 'Pride and Prejudice'?",
            answer: "Jane Austen"
        },
        {
            id: 11,
            question: "What is the currency of Japan?",
            answer: "Japanese yen"
        },
        {
            id: 12,
            question: "Who discovered penicillin?",
            answer: "Alexander Fleming"
        },
        {
            id: 13,
            question: "What is the tallest animal in the world?",
            answer: "Giraffe"
        },
        {
            id: 14,
            question: "Which planet is known as the 'Morning Star'?",
            answer: "Venus"
        },
        {
            id: 15,
            question: "What is the chemical symbol for silver?",
            answer: "Ag"
        },
        {
            id: 16,
            question: "What is the largest organ in the human body?",
            answer: "Skin"
        },
        {
            id: 17,
            question: "Who wrote 'The Great Gatsby'?",
            answer: "F. Scott Fitzgerald"
        },
        {
            id: 18,
            question: "What is the capital of Brazil?",
            answer: "Brasília"
        },
        {
            id: 19,
            question: "What is the diameter of Earth?",
            answer: "Approximately 12,742 kilometers"
        },
        {
            id: 20,
            question: "Who painted 'Starry Night'?",
            answer: "Vincent van Gogh"
        },
        {
            id: 21,
            question: "What is the chemical symbol for carbon?",
            answer: "C"
        },
        {
            id: 22,
            question: "What is the national flower of Japan?",
            answer: "Cherry blossom"
        },
        {
            id: 23,
            question: "Who was the first person to set foot on the moon?",
            answer: "Neil Armstrong"
        },
        {
            id: 24,
            question: "What is the deepest ocean trench in the world?",
            answer: "Mariana Trench"
        },
        {
            id: 25,
            question: "Who wrote '1984'?",
            answer: "George Orwell"
        },
        {
            id: 26,
            question: "What is the capital of Italy?",
            answer: "Rome"
        },
        {
            id: 27,
            question: "What is the chemical symbol for oxygen?",
            answer: "O"
        },
        {
            id: 28,
            question: "What is the national bird of the United States?",
            answer: "Bald eagle"
        },
        {
            id: 29,
            question: "Who painted the 'Mona Lisa'?",
            answer: "Leonardo da Vinci"
        },
        {
            id: 30,
            question: "What is the largest desert in the world?",
            answer: "Sahara Desert"
        },
        {
            id: 31,
            question: "Who discovered electricity?",
            answer: "Benjamin Franklin"
        },
        {
            id: 32,
            question: "What is the chemical symbol for hydrogen?",
            answer: "H"
        },
        {
            id: 33,
            question: "What is the capital of Canada?",
            answer: "Ottawa"
        },
        {
            id: 34,
            question: "Who wrote 'Hamlet'?",
            answer: "William Shakespeare"
        },
        {
            id: 35,
            question: "What is the fastest land animal?",
            answer: "Cheetah"
        },
        {
            id: 36,
            question: "What is the chemical symbol for sodium?",
            answer: "Na"
        },
        {
            id: 37,
            question: "What is the national sport of Canada?",
            answer: "Ice hockey"
        },
        {
            id: 38,
            question: "Who was the first President of the United States?",
            answer: "George Washington"
        },
        {
            id: 39,
            question: "What is the capital of South Africa?",
            answer: "Pretoria"
        },
        {
            id: 40,
            question: "What is the chemical symbol for iron?",
            answer: "Fe"
        },
        {
            id: 41,
            question: "What is the largest mammal in the world?",
            answer: "Blue whale"
        },
        {
            id: 42,
            question: "Who painted the 'Last Supper'?",
            answer: "Leonardo da Vinci"
        },
        {
            id: 43,
            question: "What is the chemical symbol for nitrogen?",
            answer: "N"
        },
        {
            id: 44,
            question: "What is the national flower of England?",
            answer: "Rose"
        },
        {
            id: 45,
            question: "Who wrote 'Moby-Dick'?",
            answer: "Herman Melville"
        },
        {
            id: 46,
            question: "What is the chemical symbol for helium?",
            answer: "He"
        },
        {
            id: 47,
            question: "What is the national sport of India?",
            answer: "Field hockey"
        },
        {
            id: 48,
            question: "Who was the first female Prime Minister of the United Kingdom?",
            answer: "Margaret Thatcher"
        },
        {
            id: 49,
            question: "What is the chemical symbol for lead?",
            answer: "Pb"
        },
        {
            id: 50,
            question: "What is the largest animal in the world?",
            answer: "Blue whale"
        }
    ];

    res.status(200).json(dummyData);
};
