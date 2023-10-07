import React from 'react';

let AddTodoForm = () => {
    return (
        <div>
            <form>
                <label htmlFor="todoTitle">Title:</label><br />
                <input type="text" id="todoTitle" required /><br />
            </form>
            <button>Add</button>
        </div>
    );
}

export default AddTodoForm;