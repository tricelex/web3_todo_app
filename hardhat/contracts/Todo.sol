// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract Todos {
    struct Todo {
        string title;
        bool completed;
    }

    mapping(address => Todo[]) private Users;
    event createEvent(address indexed sender, string message);

    function createTodo(string calldata _title) external {
        Users[msg.sender].push(Todo({title: _title, completed: false}));
        emit createEvent(msg.sender, _title);
    }

    function getTodo(uint256 _todoIndex) external view returns (Todo memory) {
        Todo storage todo = Users[msg.sender][_todoIndex];
        return todo;
    }

    function updateStatus(uint256 _todoIndex, bool _status) external {
        Users[msg.sender][_todoIndex].completed = _status;
    }

    function deleteTodo(uint256 _todoIndex) external {
        delete Users[msg.sender][_todoIndex];
    }

    function getTodosCount() external view returns (uint256) {
        return Users[msg.sender].length;
    }
}
