// Available keywords array
let availableKeywords = [
    'New Trending',
    'Latest Fashion',
    'Mens Fashion',
    'Womens Clothing Images',
    'Mens Collection',
    'Accessories for men',
    'Accessories for women',
    'Kidds Fshion',
    'Trendy Watches',
    'Earings',
    'T-shirt and Shirts',
    'Trousers',
    'Jeans'
    
];

document.addEventListener("DOMContentLoaded", function () {
    const resultsBox = document.querySelector(".result-box");
    const inputBox = document.getElementById("search-input");

    inputBox.onkeyup = function () {
        let result = [];
        let input = inputBox.value;
        if (input.length) {
            result = availableKeywords.filter((keyword) => {
                return keyword.toLowerCase().includes(input.toLowerCase());
            });
        }
        display(result);

        if (!result.length) {
            resultsBox.innerHTML = '';
        }
    };

    function display(result) {
        const content = result.map((list) => {
            return "<li onclick=selectInput('" + list + "')>" + list + "</li>";
        });

        resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
    }

    function selectInput(selectedValue) {
        inputBox.value = selectedValue;
        resultsBox.innerHTML = '';

        // Redirect to the corresponding page based on the selected keyword
        if (selectedValue.toLowerCase() === "mens collection") {
            window.location.href = "mens.html";
        }
    }

    display([]);
});
