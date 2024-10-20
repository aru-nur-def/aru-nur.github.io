document.getElementById('calculateButton').addEventListener('click', function() {
    let basePrice = 100;

    // Education
    let education = parseFloat(document.getElementById('education').value);
    basePrice *= education;

    // Family Net Worth
    let netWorth = parseFloat(document.getElementById('netWorth').value);
    basePrice *= netWorth;

    // Caste
    let caste = parseFloat(document.getElementById('caste').value);
    basePrice += caste;

    // Skills
    let skills = document.querySelectorAll('input[name="skills"]:checked');
    skills.forEach(function(skill) {
        basePrice += parseFloat(skill.value);
    });

    // Age
    let age = parseFloat(document.querySelector('input[name="age"]:checked').value);
    basePrice *= age;

    // Reputation
    let reputation = document.querySelectorAll('input[name="reputation"]:checked');
    reputation.forEach(function(rep) {
        let repValue = parseFloat(rep.value);
        if (repValue < 1) {
            basePrice *= repValue;
        } else {
            basePrice += repValue;
        }
    });

    // Update the total price in the DOM
    document.getElementById('totalPrice').textContent = basePrice.toFixed(2);
});
