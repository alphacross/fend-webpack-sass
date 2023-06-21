function testSubmit(e) {
    console.log('tete')
    e.preventDefault();
    fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = res.message + 'asdasd'
        })
}

export { testSubmit }