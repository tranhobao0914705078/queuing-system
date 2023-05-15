import React from 'react'
import styles from './Dashboard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faDesktop, faCommentAlt, faCalendar, faArrowUp, faArrowDown, faCalendarCheck, faPhone, faStar } from '@fortawesome/free-solid-svg-icons'
import { CalendarCustom } from '../YearCalendar/CalendarCustom'
import SelectDate from '../SelectDate/SelectDate'
import chart from './image/chart.jpg'

export const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.breadCrumb}>
        <h3 className={styles.titleBreadCrumb}>Dashboard</h3>
      </div>
      <div className={styles.headerChart}>
        <h3 className={styles.titleChart}>Biểu đồ cấp số</h3>
      </div>
      <div className={styles.boxHeader}>
        <div className={styles.boxHeader1}>
            <div className={styles.content1}>
                <div className={styles.iconCalendar}>
                  <FontAwesomeIcon icon={faCalendar} className={styles.customIconCalendar}/>
                </div>
                <div className={styles.titleHeader}>
                  <p>Số thứ tự đã cấp</p>
                </div>
            </div>
            <div className={styles.content2}>
                <p>4.221</p>
                <div className={styles.increase}>
                    <FontAwesomeIcon icon={faArrowDown} className={styles.customIconArrowUp}/>
                    <p>32,41%</p>
                </div>
            </div>
        </div>
        <div className={styles.boxHeader1}>
        <div className={styles.content3}>
                <div className={styles.iconCalendar2}>
                  <FontAwesomeIcon icon={faCalendarCheck} className={styles.customIconCalendarCheck}/>
                </div>
                <div className={styles.titleHeader}>
                  <p>Số thứ tự đã sử dụng</p>
                </div>
            </div>
            <div className={styles.content2}>
                <p>3.721</p>
                <div className={styles.decrease}>
                    <FontAwesomeIcon icon={faArrowUp} className={styles.customIconArrowUp}/>
                    <p>32,41%</p>
                </div>
            </div>
        </div>
        <div className={styles.boxHeader1}>
        <div className={styles.content1}>
                <div className={styles.iconPhone}>
                  <FontAwesomeIcon icon={faPhone} className={styles.customIconPhone}/>
                </div>
                <div className={styles.titleHeader}>
                  <p>Số thứ tự đang chờ</p>
                </div>
            </div>
            <div className={styles.content2}>
                <p>468</p>
                <div className={styles.increase}>
                    <FontAwesomeIcon icon={faArrowDown} className={styles.customIconArrowUp}/>
                    <p>56,41%</p>
                </div>
            </div>
        </div>
        <div className={styles.boxHeader1}>
        <div className={styles.content1}>
                <div className={styles.iconStar}>
                  <FontAwesomeIcon icon={faStar} className={styles.customIconStar}/>
                </div>
                <div className={styles.titleHeader}>
                  <p>Số thứ tự đã bỏ qua</p>
                </div>
            </div>
            <div className={styles.content2}>
                <p>32</p>
                <div className={styles.increase}>
                    <FontAwesomeIcon icon={faArrowUp} className={styles.customIconArrowUp}/>
                    <p>22,41%</p>
                </div>
            </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.headerTableChart}>
          <div className={styles.tableChart}>
            <h3>Bảng thống kê theo ngày</h3>
            <p>Tháng 11/2021</p>
          </div>
          <div className={styles.selectDate}>
              <p>Xem theo</p>
              <SelectDate className={styles.customSelectDate}/>
          </div>
        </div>
        <div className={styles.chart}>
            <img src={chart} alt="" />
          </div>
      </div>
      <div className={styles.menuRight}>
      <div className={styles.overview}>
            <div className={styles.title}>
              <h2 className={styles.titleOverview}>Tổng quan</h2>
            </div>
            <div className={styles.box1}>
              <div className={styles.boxLeft}>
                <div className={styles.info}>
                <div className={styles.boxRound}>
                  <div className={styles.circleOrange}>
                    <div className={styles.circleChildren}>
                      <p className={styles.percent}>86%</p>
                    </div>
                  </div>
                </div>
                  <div className={styles.number}>
                    <div className={styles.titleNumber}><p>4.221</p></div>
                      <div className={styles.contentNumber}>
                        <FontAwesomeIcon icon={faDesktop} className={styles.deviceIcon}/>
                        <p className={styles.device}>Thiết bị</p>
                      </div>
                    </div>
                </div>
              </div>
              <div className={styles.boxRight}>
                <div className={styles.contentBoxRight}>
                    <div className={styles.contentChildren}>
                      <div className={styles.actionsStatus}>
                        <span className={styles.customActive}></span>
                        <p>Đang hoạt động</p>
                      </div>
                      <div className={styles.data}>
                        <p className={styles.dataBox1}>3.721</p>
                      </div>
                    </div>
                </div>
                <div className={styles.contentBoxRight}>
                    <div className={styles.contentChildren}>
                      <div className={styles.actionsStatus}>
                        <span className={styles.customUnActive}></span>
                        <p>Ngưng hoạt động</p>
                      </div>
                      <div className={styles.data}>
                        <p className={styles.dataBox1}>486</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className={styles.box1}>
              <div className={styles.boxLeft}>
                <div className={styles.info}>
                <div className={styles.boxRound}>
                  <div className={styles.circleBlue}>
                    <div className={styles.circleChildren}>
                      <p className={styles.percent}>86%</p>
                    </div>
                  </div>
                </div>
                  <div className={styles.number}>
                    <div className={styles.titleNumber}><p>4.221</p></div>
                      <div className={styles.contentNumber}>
                        <FontAwesomeIcon icon={faCommentAlt} className={styles.serviceIcon}/>
                        <p className={styles.service}>Dịch vụ</p>
                      </div>
                    </div>
                </div>
              </div>
              <div className={styles.boxRight}>
                <div className={styles.contentBoxRight}>
                    <div className={styles.contentChildren}>
                      <div className={styles.actionsStatus}>
                        <span className={styles.customActive}></span>
                        <p>Đang hoạt động</p>
                      </div>
                      <div className={styles.data}>
                        <p className={styles.dataBox2}>210</p>
                      </div>
                    </div>
                </div>
                <div className={styles.contentBoxRight}>
                    <div className={styles.contentChildren}>
                      <div className={styles.actionsStatus}>
                        <span className={styles.customUnActive}></span>
                        <p>Ngưng hoạt động</p>
                      </div>
                      <div className={styles.data}>
                        <p className={styles.dataBox2}>66</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className={styles.box1}>
              <div className={styles.boxLeft}>
                <div className={styles.info}>
                <div className={styles.boxRound}>
                  <div className={styles.circle}>
                    <div className={styles.circleChildren}>
                      <div className={styles.circleChildren2}>
                          <p className={styles.percent}>86%</p>
                      </div>
                    </div>
                  </div>
                </div>
                  <div className={styles.number}>
                    <div className={styles.titleNumber}><p>4.221</p></div>
                      <div className={styles.contentNumber}>
                        <FontAwesomeIcon icon={faBars} className={styles.numberIcon}/>
                        <p className={styles.levelNumber}>Cấp số</p>
                      </div>
                    </div>
                </div>
              </div>
              <div className={styles.boxRight}>
                <div className={styles.contentBoxRight}>
                    <div className={styles.contentChildren}>
                      <div className={styles.actionsStatus}>
                        <span className={styles.customSuccess}></span>
                        <p>Đã sử dụng</p>
                      </div>
                      <div className={styles.data}>
                        <p>3.721</p>
                      </div>
                    </div>
                </div>
                <div className={styles.contentBoxRight}>
                    <div className={styles.contentChildren}>
                      <div className={styles.actionsStatus}>
                        <span className={styles.customWaiting}></span>
                        <p>Đang chờ</p>
                      </div>
                      <div className={styles.data}>
                        <p>486</p>
                      </div>
                    </div>
                </div>
                <div className={styles.contentBoxRight}>
                  <div className={styles.contentChildren}>
                    <div className={styles.actionsStatus}>
                        <span className={styles.customCancel}></span>
                        <p>Bỏ qua</p>
                      </div>
                      <div className={styles.data}>
                        <p>32</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <CalendarCustom className={styles.customCalendar}/>
          </div>
      </div>
    </div>
  )
}
