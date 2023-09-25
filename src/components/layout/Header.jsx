import { UserOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
     const [toggle, setToggle] = useState(false);
     const navigate = useNavigate();
     const handleLogout = () => {
          navigate("/login");
     };

     const items = [
          {
               key: "1",
               label: (
                    <a
                         target="_blank"
                         rel="noopener noreferrer"
                         href="https://www.antgroup.com"
                    >
                         1st menu item
                    </a>
               ),
          },
          {
               key: "2",
               label: (
                    <a
                         target="_blank"
                         rel="noopener noreferrer"
                         href="https://www.aliyun.com"
                    >
                         2nd menu item
                    </a>
               ),
          },
          {
               key: "3",
               label: (
                    <a
                         target="_blank"
                         rel="noopener noreferrer"
                         onClick={handleLogout}
                    >
                         Logout
                    </a>
               ),
          },
     ];

     const listUsers = useSelector((state) => state.users.value);
     console.log(listUsers);
     return (
          <header className="masthead">
               <div className="boards-menu">
                    <button className="boards-btn btn">
                         <i className="fab fa-trello boards-btn-icon"></i>Boards
                    </button>
                    <div className="board-search">
                         <input
                              type="search"
                              className="board-search-input"
                              aria-label="Board Search"
                         />
                         <i
                              className="fas fa-search search-icon"
                              aria-hidden="true"
                         ></i>
                    </div>
               </div>
               <div className="logo">
                    <h1>
                         <i
                              className="fab fa-trello logo-icon"
                              aria-hidden="true"
                         ></i>
                         TodoList Pro
                    </h1>
               </div>
               <div className="user-settings">
                    <button
                         className="user-settings-btn btn"
                         aria-label="Create"
                    >
                         <i className="fas fa-plus" aria-hidden="true"></i>
                    </button>
                    <button
                         className="user-settings-btn btn"
                         aria-label="Information"
                    >
                         <i
                              className="fas fa-info-circle"
                              aria-hidden="true"
                         ></i>
                    </button>
                    <button
                         className="user-settings-btn btn"
                         aria-label="Notifications"
                         onClick={() => setToggle(!toggle)}
                    >
                         <i className="fas fa-bell" aria-hidden="true"></i>
                         <span className="notify-bell">1</span>
                         <div>
                              {toggle ? (
                                   listUsers.map((use) => {
                                        const user = use.user;
                                        const createdAt = new Date(
                                             user.createdAt
                                        );
                                        const currentTime = new Date();
                                        const gio = createdAt.getUTCHours();
                                        const phut = createdAt.getUTCMinutes();
                                        const giay = createdAt.getUTCSeconds();
                                        return (
                                             <ul
                                                  key={user.id}
                                                  className="list-notify"
                                             >
                                                  <li>
                                                       <strong>
                                                            {" "}
                                                            {user.username}
                                                       </strong>{" "}
                                                       You are currently
                                                       registering successfully{" "}
                                                  </li>
                                                  <p>
                                                       {createdAt < currentTime
                                                            ? gio +
                                                              ":" +
                                                              phut +
                                                              ":" +
                                                              giay +
                                                              "ago"
                                                            : gio +
                                                              ":" +
                                                              phut +
                                                              ":" +
                                                              giay +
                                                              "s"}
                                                  </p>
                                             </ul>
                                        );
                                   })
                              ) : (
                                   <div className="notify-fake"></div>
                              )}
                         </div>
                    </button>
                    <Dropdown
                         menu={{
                              items,
                         }}
                         placement="bottom"
                         arrow={{
                              pointAtCenter: true,
                         }}
                    >
                         <Button>
                              <UserOutlined />
                         </Button>
                    </Dropdown>
               </div>
          </header>
     );
}
