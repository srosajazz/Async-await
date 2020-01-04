//inheritance
class List {
  constructor() {
    this.data = [];
  }
  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();
    this.user = "Sergio";
  }

  showUser() {
    console.log(this.user);
  }
}

const MyList = new TodoList();

document.getElementById("newtodo").onclick = function() {
  MyList.add("new todo");
};

MyList.showUser();
