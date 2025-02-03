const poems = [
    "Roses are red, violets are blue, every heartbeat whispers, 'I love you.'",
    "Your smile is my sunshine, your love is my air, without you, my darling, life isn’t fair.",
    "From the moment I met you, my world changed, you are my heart’s sweetest exchange.",
    // Add 97 more poems here...
];

const poemList = document.getElementById("poem-list");

poems.forEach((poem, index) => {
    const poemDiv = document.createElement("div");
    poemDiv.classList.add("poem");
    poemDiv.innerHTML = `<h3>Poem ${index + 1}</h3><p>${poem}</p>`;
    poemList.appendChild(poemDiv);
});
