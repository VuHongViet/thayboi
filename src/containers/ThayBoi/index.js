import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Input, Button, Icon, Tag, Tabs, List, Avatar } from "antd";

import IsAuthenticated from "./IsAuthenticated";
import UnAuthenticated from "./UnAuthenticated";
import PostRated from "../../components/ITem/ThayBoiITem";
import "./styles/index.less";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  render() {
    const { Search } = Input;
    const { TabPane } = Tabs;
    const data = [
      {
        title: "Ant Design Title 1"
      },
      {
        title: "Ant Design Title 2"
      },
      {
        title: "Ant Design Title 3"
      },
      {
        title: "Ant Design Title 4"
      }
    ];

    const result = [
      {
        _id: {
          _id: "5dc7089d926e8f4a640e9a96",
          name: "Giáp Văn Hùng",
          gender: 2,
          avatar: "https://i.imgur.com/TzCgPaI.jpg",
          skill: "xem các thứ"
        },
        rate: [
          {
            _id: "5dc70a02926e8f4a640e9aa2",
            star: 5
          }
        ],
        avg: 5
      },
      {
        _id: {
          _id: "5dc7088b926e8f4a640e9a92",
          name: "Hoàng Đức Anh",
          gender: 1,
          avatar: "https://i.imgur.com/TzCgPaI.jpg",
          skill: "xem các thứ"
        },
        rate: [
          {
            _id: "5dc709c3926e8f4a640e9a9e",
            star: 1
          },
          {
            _id: "5dc70ac7926e8f4a640e9aac",
            star: 5
          }
        ],
        avg: 3
      }
    ];
    return (
      <div>
        <Row type="flex" justify="center" align="middle" className="row-header">
          <Col span={18}>
            <Row>
              <Col md={4}>
                <img />
              </Col>
              <Col md={20}>
                <Row type="flex">
                  <Col md={15}>
                    <Search enterButton placeholder="Tìm Kiếm" />
                  </Col>
                  <Col md={9}>
                    <Row type="flex" justify="end">
                      <Col>
                        <Button
                          shape="circle"
                          icon="plus"
                          style={{ marginRight: 5 }}
                        />
                        <Tag color="green">Đăng Bài</Tag>
                      </Col>
                      {this.state.isAuthenticated ? (
                        <IsAuthenticated />
                      ) : (
                        <UnAuthenticated />
                      )}
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="postRated">
              <Col md={16}>
                {/* {result.map((e, i) => {
                  return (
                    <PostRated
                      key={e._id._id}
                      avgStar={e.avg}
                      avatar={e._id.avatar}
                    >
                      {e._id.name}
                    </PostRated>
                  );
                })} */}
                <List
                  itemLayout="horizontal"
                  dataSource={result}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={item._id.avatar} />}
                        title={<a href="https://ant.design">{item._id.name}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                    </List.Item>
                  )}
                />
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                    </List.Item>
                  )}
                />
              </Col>
              <Col md={8}>
                <Tabs>
                  <TabPane
                    tab={
                      <span>
                        <Icon type="like" />
                        Top thầy bói uy tín
                      </span>
                    }
                    key="1"
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={result}
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar src={item._id.avatar} />}
                            title={
                              <a href="https://ant.design">{item._id.name}</a>
                            }
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      )}
                    />
                  </TabPane>
                  <TabPane
                    tab={
                      <span>
                        <Icon type="dislike" />
                        Top thầy bói nên né
                      </span>
                    }
                    key="2"
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={result}
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar src={item._id.avatar} />}
                            title={
                              <a href="https://ant.design">{item._id.name}</a>
                            }
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                          />
                        </List.Item>
                      )}
                    />
                  </TabPane>
                </Tabs>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
