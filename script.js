const data = {
    Parent: {
      img: "father.png",
      name: "Jan Doe",
      age: "50",
      children: [
        {
          child: {
            img: "child_1.png",
            name: "child 1",
            age: "25",
          },
        },
        {
          child: {
            img: "child_2.png",
            name: "child 2",
            age: "22",
            children: [
              {
                grandChild: {
                  img: "child_3.png",
                  name: "grand child 1",
                  age: "12",
                },
              },
            ],
          },
        },
        {
          child: {
            img: "child_4.png",
            name: "child 3",
            age: "16",
            children: [
              {
                grandChild: {
                  img: "child_5.png",
                  name: "grand child 1",
                  age: "18",
                  children: [
                    {
                      grandgrandChild: {
                        img: "child_6.png",
                        name: "great grand child 1",
                        age: "13",
                      },
                    },
                    {
                      grandgrandChild: {
                        img: "child_7.png",
                        name: "great grand child 2",
                        age: "10",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
};

const container = [];

const createList = (list) => {
  for(item in list){
    const type = typeof item;
    container.push(`<li>`)
    const details = list[item]
    getItem(details);
    container.push(`</li>`)
  }
}

const getItem = (list) => {
  for(item in list){
    switch(item){
      case 'name' : {
        container.push(`<div>${list[item]}</div>`);
        break;
      } 
      case 'children' : {
        container.push(`<ul>`)
        list[item].forEach(element => {
          createList(element);
        });
        container.push(`</ul>`)
        break;
      }
    }
  }
}

window.onload = () =>{
    container.push('<ul>');
    createList(data);
    container.push('</ul>');
    let string = container.join("")
    document.getElementById('div').innerHTML = string;  
}

