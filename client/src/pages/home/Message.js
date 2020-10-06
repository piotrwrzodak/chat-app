import React, { Fragment } from 'react';
import classNames from 'classnames';
import { useAuthState } from '../../context/auth';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import moment from 'moment';

export default function Message({ message }) {
  const { user } = useAuthState();
  const sent = message.from === user.username;
  const received = !sent;
  return (
    <Fragment>
      <OverlayTrigger
        placement={sent ? 'left' : 'right'}
        overlay={
          <Tooltip>
            {moment(message.createdAt).format('MMMM DD, YYYY @ h:mm a')}
          </Tooltip>
        }
      >
        <div
          className={classNames('d-flex my-3', {
            'ml-auto': sent,
            'mr-auto': received,
          })}
        >
          <div
            className={classNames('py-2 px-3 rounded-pill bg-primary', {
              'bg-primary': sent,
              'bg-secondary': received,
            })}
          >
            <p
              className={classNames('m-0', { 'text-white': sent })}
              key={message.uuid}
            >
              {message.content}
            </p>
          </div>
        </div>
      </OverlayTrigger>
    </Fragment>
  );
}
