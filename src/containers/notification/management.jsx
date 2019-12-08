import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { notice_size, like_size, tital_size, menu_size, under } from './styled';

export class NotificationManagement extends Component {
  render() {
    //ダミーデータ

    const managements = [
      {
        id: 1,
        text:
          'あなたの投稿にラーメンではないラーメンではない画像が投稿されていたため,削除いたしました。',
        created_at: '2019/11/29 22:56:15'
      }
    ];

    //通知がある時

    if (managements) {
      return (
        <div className=" px-0">
          <div className="text-center mb-4 mt-4" style={tital_size}>
            通知
          </div>
          <div className="d-flex justify-content-around border-bottom">
            <Link
              to="/notification"
              className="text-black-50 mb-2"
              style={(menu_size, under)}
            >
              いいね
            </Link>
            <Link
              to="/notification/follow"
              className="text-black-50"
              style={(menu_size, under)}
            >
              フォロー
            </Link>
            <Link
              to="/notification/management"
              className="text-dark"
              style={(menu_size, under)}
            >
              運営から
            </Link>
          </div>
          <div>
            {managements.map((management, idx) => {
              return (
                <div key={idx} className=" px-2 py-2 m-3">
                  <span className=" d-flex align-items-center" style={under}>
                    <img
                      src="https://placehold.jp/150x150.png?text=icon"
                      alt="user_avatar"
                      className="d-inline-block rounded-circle border"
                      height="55px"
                      width="55px"
                    />
                    <span
                      className="d-inline-block pl-3 text-body"
                      style={notice_size}
                    >
                      {management.text}
                      <td></td>
                      <span className="text-muted" style={like_size}>
                        {management.created_at.substr(0, 10)}
                      </span>
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      );

      //通知がない時
    } else {
      return (
        <div className=" px-0">
          <div className="text-center mb-5 mt-4" style={tital_size}>
            通知
          </div>
          <div className="d-flex justify-content-around border-bottom">
            <Link
              to="/notification"
              className="text-black-50 mb-2"
              style={(menu_size, under)}
            >
              いいね
            </Link>
            <Link
              to="/notification/follow"
              className="text-black-50"
              style={(menu_size, under)}
            >
              フォロー
            </Link>
            <Link
              to="/notification/management"
              className="text-dark"
              style={(menu_size, under)}
            >
              運営
            </Link>
          </div>
          <div className="text-center mb-5 mt-4 p-1">通知はありません。</div>
        </div>
      );
    }
  }
}
