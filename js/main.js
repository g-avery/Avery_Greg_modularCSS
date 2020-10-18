(() => {

    function handleData (data){
        let cn = document.querySelector('.coursename'),
            cc = document.querySelector('.coursecode'),
            pn = document.querySelector('.profname'),
            ct = document.querySelector('.list-inline'),
            cd = document.querySelector('.coursedesc');

            cn.innerText = data.coursename+" - "+data.coursecode;
            cc.innerText = data.coursename+" - "+data.coursecode;
            pn.innerText = "Professor - "+data.profname;
            ct.innerText = " 🕒 "+data.classtime[0]+" 🕒 "+data.classtime[1];
            cd.innerText = data.coursedesc;
    }

    // make aan AJAX request using the Fetch API
    fetch('./data/classData.json')
        .then(res => res.json())
        .then(data => {
        console.log(data);

        //handleData
        //here's where you would call the function that puts the pieces on the page
        handleData(data);


         })
    .catch((err) => {
        console.log(err + '\n' + "error: 404. Could not load data.");
    })

})();