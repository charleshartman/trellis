import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateListTitle } from "../actions/ListActions";
import Card from "./Card";

const List = ({ list }) => {
  const cards = useSelector((state) => {
    return state.cards;
  });
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [listTitle, setListTitle] = useState(list.title);
  const dispatch = useDispatch();

  const handleToggle = (e) => {
    e.preventDefault();
    // console.log('hello world');
    setIsEditTitle(!isEditTitle);
  };

  const handleTitleChange = (e) => {
    setListTitle(e.target.value);
  }

  const handlePressEnterOnListTitleChangeInput = (e) => {
    if (e.keyCode === 13) {
      submitListTitleChange(e)
    }
  }

  const handleLoseFocusOnListTitleChangeInput = (e) => {
    submitListTitleChange(e)
  }

  const submitListTitleChange = (e) => {
    const id = list._id
    const listInfo = { "title": listTitle }
    dispatch(updateListTitle(id, listInfo));
    handleToggle(e);
  }

  return (
    <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <a onClick={handleToggle} className="more-icon sm-icon" href=""></a>
          <div>
            {isEditTitle ? (
              <input
                type="text"
                className="list-title"
                value={listTitle}
                autoFocus={true}
                onChange={handleTitleChange}
                onBlur={handleLoseFocusOnListTitleChangeInput}
                onKeyUp={handlePressEnterOnListTitleChangeInput}
              />
            ) : (
              <p className="list-title">{listTitle}</p>
            )}
          </div>
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div id="cards-container" data-id={`list-${list._id}-cards`}>
            {cards.map((card) => {
              if (card.listId === list._id) {
                return <Card key={card._id} card={card} />;
              }
            })}
          </div>
          <div className="add-dropdown add-bottom">
            <div className="card">
              <div className="card-info"></div>
              <textarea name="add-card"></textarea>
              <div className="members"></div>
            </div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...Where is this...</span>
            </div>
          </div>
          <div className="add-card-toggle" data-position="bottom">
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
