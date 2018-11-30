import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  DragDropContext,
  Draggable,
  Droppable,
} from 'react-beautiful-dnd';


export default class SortableList extends Component {
  static propTypes = {
    direction: PropTypes.string,
    onDragEnd: PropTypes.func.isRequired,
  };

  render() {
    const {
      direction = 'vertical',
      type,
      onDragEnd,
      dragHandle,
      children,
    } = this.props;

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="droppable"
          type={type}
          direction={direction}
        >
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={classNames('drag-list', direction, { dropping: snapshot.isDraggingOver })}
            >
              {React.Children.map(children, (child, index) => (
                <Draggable
                  key={child.key}
                  draggableId={child.key}
                  index={index}
                >
                  {(providedDraggable, draggableSnapshot) => (
                    <div
                      ref={providedDraggable.innerRef}
                      {...providedDraggable.draggableProps}
                      className={classNames('drag-item', { dragging: draggableSnapshot.isDraggingOver })}
                    >
                      {dragHandle ? (
                        React.cloneElement(child, { dragHandleProps: providedDraggable.dragHandleProps })
                      ) : (
                        <div {...providedDraggable.dragHandleProps}>
                          {child}
                        </div>
                      )}
                    </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
