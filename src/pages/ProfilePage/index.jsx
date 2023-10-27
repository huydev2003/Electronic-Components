import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../stores/authentication/actions";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { user, refreshToken } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState(0);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const handleLogout = async (item) => {
    setActiveTab(item);
    await dispatch(logout(refreshToken));
  };

  return (
    <Layout>
      <div className="w-full pt-0 pb-0">
        <div className="profile-page-wrapper w-full">
          <div className="max-w-6xl mx-auto">
            <div className="w-full my-10">
              <div>
                <div className="breadcrumb-wrapper font-400 text-[13px] text-qblack mb-[23px]">
                  <span>
                    <a href="/">
                      <span className="mx-1 capitalize">home</span>
                    </a>
                    <span className="sperator">/</span>
                  </span>
                  <span>
                    <a href="/profile">
                      <span className="mx-1 capitalize">profile</span>
                    </a>
                  </span>
                </div>
              </div>
              <div className="w-full bg-white px-10 py-9 border">
                <div className="title-area w-full flex justify-between items-center">
                  <h1 className="text-[22px] font-bold text-black">
                    Your Dashboard
                  </h1>
                </div>
                <div className="profile-wrapper w-full mt-8 flex space-x-10">
                  <div className="w-[236px] border-r border-[rgba(0, 0, 0, 0.1)]">
                    <div className="flex flex-col space-y-10">
                      <div className="item group">
                        <div
                          onClick={() => handleTabClick(0)}
                          className={`flex space-x-3 items-center cursor-pointer ${
                            activeTab === 0
                              ? "text-yellow-400"
                              : "text-slate-500 hover:text-black"
                          }`}
                        >
                          <span>
                            <svg
                              width={17}
                              height={17}
                              viewBox="0 0 17 17"
                              fill="none"
                              className="fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.21258 4.98254C9.21258 6.17687 9.20926 7.37119 9.21391 8.56552C9.21723 9.41928 9.69987 9.9079 10.5483 9.90989C12.2512 9.91454 13.9547 9.91454 15.6576 9.90989C16.5007 9.9079 16.9966 9.40799 16.9979 8.56751C16.9999 6.16757 16.9999 3.76763 16.9979 1.36835C16.9973 0.508624 16.4961 0.00340804 15.6423 0.00274416C13.9613 0.000752505 12.2804 0.00141639 10.5994 0.00274416C9.69722 0.00340804 9.2159 0.488044 9.21391 1.40022C9.21059 2.59388 9.21258 3.78821 9.21258 4.98254ZM7.78722 12.0522C7.78722 10.8579 7.78921 9.66359 7.78656 8.46926C7.78456 7.57036 7.31122 7.09104 6.42028 7.08971C4.73933 7.08639 3.05837 7.08705 1.37742 7.08971C0.489805 7.09104 0.00251398 7.57965 0.0018501 8.46395C0.000522332 10.8526 0.000522332 13.2413 0.0018501 15.6299C0.00251398 16.4896 0.503747 16.9969 1.35551 16.9982C3.04775 17.0002 4.73933 17.0002 6.43157 16.9982C7.2913 16.9969 7.78257 16.5036 7.78589 15.6359C7.78988 14.4409 7.78722 13.2466 7.78722 12.0522ZM3.89022 5.66236C4.75261 5.66236 5.61499 5.66767 6.47738 5.66103C7.28665 5.65439 7.77925 5.16444 7.78523 4.35782C7.79253 3.34075 7.79253 2.32302 7.78523 1.30595C7.77925 0.505968 7.27337 0.00473581 6.47339 0.00274416C4.75924 -0.00123915 3.04576 -0.000575264 1.33161 0.00274416C0.519016 0.00407193 0.00516952 0.516591 0.00251398 1.32719C-0.00146932 2.32236 -0.000141552 3.31752 0.00251398 4.31268C0.00450564 5.15648 0.49578 5.65638 1.33626 5.66169C2.18736 5.667 3.03846 5.66236 3.89022 5.66236ZM13.1083 11.3372C12.2459 11.3372 11.3835 11.3319 10.5211 11.3386C9.71248 11.3452 9.21988 11.8358 9.21457 12.6431C9.20793 13.6602 9.20727 14.6779 9.21457 15.695C9.22055 16.493 9.72908 16.9955 10.5271 16.9969C12.2412 17.0008 13.9547 17.0002 15.6689 16.9969C16.4801 16.9955 16.994 16.481 16.9973 15.6704C17.0013 14.6752 16.9999 13.6801 16.9973 12.6849C16.9953 11.8418 16.502 11.3425 15.6622 11.3379C14.8111 11.3333 13.9594 11.3372 13.1083 11.3372Z"
                                fill="white"
                              />
                              <path d="M9.21223 4.98269C9.21223 3.78837 9.21024 2.59404 9.2129 1.39971C9.21489 0.487533 9.69621 0.00289744 10.5984 0.00223355C12.2794 0.000905786 13.9603 0.000241902 15.6413 0.00223355C16.495 0.00356132 16.9963 0.508777 16.9969 1.36784C16.9983 3.76778 16.9989 6.16773 16.9969 8.567C16.9963 9.40748 16.5004 9.90739 15.6566 9.90938C13.9537 9.91402 12.2502 9.91402 10.5473 9.90938C9.69886 9.90672 9.21622 9.41877 9.2129 8.56501C9.20891 7.37135 9.21223 6.17702 9.21223 4.98269Z" />
                              <path d="M7.78832 12.0524C7.78832 13.2467 7.79098 14.441 7.78699 15.6353C7.78434 16.503 7.2924 16.9963 6.43267 16.9976C4.74043 16.9996 3.04885 16.9996 1.35661 16.9976C0.504846 16.9963 0.00361284 16.4891 0.00294895 15.6294C0.00162118 13.2407 0.00162118 10.8521 0.00294895 8.4634C0.00361284 7.57911 0.490904 7.09115 1.37852 7.08916C3.05947 7.08651 4.74043 7.08584 6.42138 7.08916C7.31231 7.09115 7.785 7.56981 7.78766 8.46871C7.79031 9.6637 7.78832 10.858 7.78832 12.0524Z" />
                              <path d="M3.89062 5.6621C3.03952 5.6621 2.18775 5.66609 1.33665 5.66077C0.496177 5.65613 0.00490302 5.15622 0.00224748 4.31243C-0.000408054 3.31726 -0.00107194 2.3221 0.00224748 1.32694C0.0055669 0.516336 0.519413 0.00381733 1.33201 0.00248957C3.04616 -0.000829855 4.75964 -0.000829855 6.47379 0.00248957C7.27311 0.00448122 7.77965 0.50505 7.78563 1.30569C7.79293 2.32276 7.79293 3.3405 7.78563 4.35757C7.77965 5.16485 7.28771 5.6548 6.47777 5.66077C5.61539 5.66741 4.753 5.6621 3.89062 5.6621Z" />
                              <path d="M13.1081 11.3378C13.9592 11.3378 14.811 11.3338 15.6621 11.3391C16.5019 11.3444 16.9952 11.843 16.9972 12.6862C16.9998 13.6813 17.0005 14.6765 16.9972 15.6716C16.9939 16.4822 16.48 16.9968 15.6687 16.9981C13.9546 17.0014 12.2411 17.0014 10.527 16.9981C9.72831 16.9961 9.21977 16.4935 9.21446 15.6962C9.20716 14.6791 9.20716 13.6614 9.21446 12.6443C9.21977 11.837 9.71237 11.3464 10.521 11.3398C11.3834 11.3325 12.2458 11.3378 13.1081 11.3378Z" />
                            </svg>
                          </span>
                          <span className={`font-normal text-base`}>
                            Dashboard
                          </span>
                        </div>
                      </div>
                      <div className="item group">
                        <div
                          onClick={() => handleTabClick(1)}
                          className={`flex space-x-3 items-center cursor-pointer ${
                            activeTab === 1
                              ? "text-yellow-400"
                              : "text-slate-500 hover:text-black"
                          }`}
                        >
                          <span>
                            <svg
                              width={14}
                              height={19}
                              viewBox="0 0 14 19"
                              fill="none"
                              className="fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.96898 10.7061H3.78814C1.6967 10.7061 0.00346265 12.4028 0 14.4942V18.3481H13.7606V14.4942C13.7571 12.4028 12.0604 10.7061 9.96898 10.7061Z" />
                              <path d="M6.88098 9.17603C9.41488 9.17603 11.469 7.12191 11.469 4.58802C11.469 2.05412 9.41488 0 6.88098 0C4.34709 0 2.29297 2.05412 2.29297 4.58802C2.29297 7.12191 4.34709 9.17603 6.88098 9.17603Z" />
                            </svg>
                          </span>
                          <span className=" font-normal text-base">
                            Parsonal Info
                          </span>
                        </div>
                      </div>

                      <div className="item group">
                        <div
                          onClick={() => handleTabClick(2)}
                          className={`flex space-x-3 items-center cursor-pointer ${
                            activeTab === 2
                              ? "text-yellow-400"
                              : "text-slate-500 hover:text-black"
                          }`}
                        >
                          <span>
                            <svg
                              width={15}
                              height={18}
                              viewBox="0 0 15 18"
                              fill="none"
                              className="fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.9643 15.8454C10.8728 15.8399 10.8054 15.8331 10.7381 15.8331C9.37517 15.8324 8.01229 15.8324 6.60539 15.8324C6.85294 16.5145 6.77799 17.099 6.11648 17.4676C5.68672 17.7076 5.24457 17.6615 4.86018 17.3562C4.36027 16.9594 4.3087 16.4409 4.56175 15.8317C3.82667 15.8317 3.13285 15.8406 2.43903 15.8296C1.53136 15.8152 0.910425 14.8958 1.25974 14.0638C1.34845 13.852 1.51898 13.6581 1.69295 13.502C2.43628 12.8384 3.19199 12.1872 3.95182 11.5429C4.11204 11.4075 4.16499 11.2816 4.11479 11.074C3.36389 7.96037 2.61506 4.8454 1.87999 1.72768C1.82085 1.476 1.71564 1.42512 1.48597 1.432C0.997754 1.44712 0.507472 1.43681 0 1.43681C0 1.06824 0 0.741614 0 0.390921C0.782525 0.390921 1.54786 0.377856 2.31182 0.397798C2.58825 0.405362 2.70308 0.630905 2.76772 0.885329C3.01389 1.86177 3.27725 2.83339 3.5138 3.81189C3.57775 4.07732 3.68846 4.22034 3.96901 4.19971C3.98001 4.19903 3.9917 4.20315 4.00339 4.20315C4.60369 4.21003 4.95026 4.4507 5.25488 5.03863C6.60195 7.64613 10.1907 7.96587 12.0686 5.68981C12.2206 5.50622 12.3512 5.44639 12.585 5.4904C13.0911 5.58529 13.6027 5.64855 14.1136 5.71801C14.333 5.74826 14.4306 5.85416 14.4251 6.08314C14.3839 7.93906 14.3461 9.79498 14.3144 11.6509C14.3089 11.9816 14.0937 11.9665 13.8661 11.9665C11.0819 11.9651 8.29697 11.9693 5.51274 11.9596C5.2425 11.959 5.03897 12.0291 4.8368 12.2072C4.05428 12.8962 3.25525 13.5659 2.47135 14.2536C2.37095 14.3416 2.32488 14.4908 2.25337 14.6111C2.38264 14.6552 2.51192 14.737 2.64119 14.737C6.60608 14.7439 10.571 14.7425 14.5358 14.7425C14.6823 14.7425 14.8288 14.7425 15 14.7425C15 15.1152 15 15.4514 15 15.8193C14.3426 15.8193 13.6935 15.8193 13.0127 15.8193C13.25 16.4568 13.2156 17.0055 12.6442 17.4064C12.2536 17.68 11.7406 17.6814 11.3521 17.4091C10.78 17.011 10.7339 16.4636 10.9643 15.8454Z" />
                              <path d="M8.8449 6.1337C7.15883 6.12476 5.787 4.74744 5.78906 3.06549C5.79113 1.37254 7.18564 -0.00685072 8.88753 2.55979e-05C10.5702 0.00690192 11.9413 1.38835 11.9392 3.07374C11.9372 4.77563 10.555 6.14264 8.8449 6.1337ZM9.94924 1.61802C9.38194 2.22039 8.85178 2.78287 8.31199 3.35636C8.11326 3.12806 7.94342 2.93278 7.76394 2.72786C7.48201 2.96853 7.22553 3.1872 6.95735 3.41618C7.28191 3.80125 7.57484 4.16708 7.8884 4.51502C8.10157 4.75225 8.43232 4.77082 8.65236 4.54458C9.33656 3.83907 10.0042 3.11775 10.6382 2.44593C10.4031 2.16332 10.1858 1.9027 9.94924 1.61802Z" />
                            </svg>
                          </span>
                          <span className=" font-normal text-base">Order</span>
                        </div>
                      </div>

                      <div className="item group">
                        <div
                          onClick={() => handleTabClick(3)}
                          className={`flex space-x-3 items-center cursor-pointer ${
                            activeTab === 3
                              ? "text-yellow-400"
                              : "text-slate-500 hover:text-black"
                          }`}
                        >
                          <span>
                            <svg
                              width={14}
                              height={20}
                              viewBox="0 0 14 20"
                              fill="none"
                              className="fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M11.864 15.982C11.4632 12.6503 9.25877 11.1115 7.04363 11.0543C5.70166 11.0221 4.5422 11.5123 3.57598 12.4607C2.60976 13.4054 2.19465 14.5935 1.99067 16.0285C1.37873 15.7458 0.809733 15.506 0.272945 15.2126C0.147695 15.1446 0.0582333 14.8941 0.0582333 14.7259C0.0439189 13.5629 -0.0849134 12.3819 0.0940158 11.2475C0.365988 9.54055 1.99067 8.23794 3.71555 8.05544C4.60661 7.96239 5.46547 7.95166 6.35296 8.16995C6.88617 8.30236 7.51243 8.19142 8.06711 8.05902C10.2357 7.52938 13.1559 8.64948 13.7571 10.997C14.0577 12.1672 14.0577 13.3661 13.8751 14.5613C13.8107 14.9979 13.6068 15.32 13.1737 15.481C12.7336 15.6385 12.3042 15.8102 11.864 15.982Z" />
                              <path d="M10.6071 3.72194C10.5928 5.77962 8.96814 7.38999 6.93193 7.36494C4.8814 7.33989 3.24241 5.7009 3.26388 3.69331C3.28535 1.59984 4.90287 -0.0212607 6.94982 0.000210833C9.01824 0.0181038 10.6215 1.64994 10.6071 3.72194Z" />
                              <path d="M10.9467 16.0178C10.9109 18.2795 9.07512 19.9972 6.74188 19.9507C4.58041 19.9077 2.77681 18.0719 2.80902 15.9498C2.8448 13.7454 4.69493 11.9776 6.9387 12.0062C9.17174 12.0384 10.9789 13.8492 10.9467 16.0178ZM6.84208 18.4834C7.27509 18.462 7.76893 18.4262 8.26278 18.419C8.62779 18.4154 8.74947 18.2222 8.74947 17.8966C8.74947 17.1808 8.75305 16.4687 8.74589 15.753C8.74589 15.6599 8.70652 15.5025 8.65642 15.4882C8.32719 15.4059 8.40234 15.1482 8.38087 14.9263C8.36298 14.7367 8.34151 14.547 8.30572 14.3645C8.15542 13.6309 7.64011 13.2122 6.91723 13.2229C6.22299 13.2337 5.64683 13.7418 5.52874 14.4432C5.4679 14.8154 5.65041 15.2735 5.17088 15.5096C5.14941 15.5204 5.14941 15.5919 5.14941 15.6349C5.14941 16.4508 5.1351 17.2667 5.16015 18.0826C5.16372 18.19 5.34981 18.3689 5.4679 18.3868C5.90449 18.4477 6.34108 18.4548 6.84208 18.4834Z" />
                              <path
                                d="M7.78818 15.3706C7.81323 14.8159 7.93491 14.2684 7.41601 13.9069C7.09036 13.6815 6.70745 13.6851 6.40327 13.9499C5.95953 14.3328 6.03826 14.8481 6.08836 15.3706C6.66451 15.3706 7.19414 15.3706 7.78818 15.3706ZM6.76113 17.643C6.8828 17.643 7.00448 17.643 7.11899 17.643C7.15836 17.3209 7.22635 17.0239 7.21561 16.7304C7.21204 16.6088 7.02953 16.4978 6.92933 16.3797C6.83986 16.4835 6.6824 16.5837 6.67883 16.6911C6.67167 16.9988 6.72892 17.3137 6.76113 17.643Z"
                                fill="white"
                              />
                              <path d="M7.78818 15.3706C7.19414 15.3706 6.66451 15.3706 6.08836 15.3706C6.03826 14.8445 5.95953 14.3328 6.40327 13.9499C6.71103 13.6851 7.09394 13.6815 7.41601 13.9069C7.93491 14.2684 7.81323 14.8159 7.78818 15.3706Z" />
                              <path d="M6.76261 17.6421C6.7304 17.3129 6.67314 17.0016 6.6803 16.6902C6.68388 16.5865 6.84134 16.4827 6.9308 16.3789C7.031 16.4934 7.21351 16.6079 7.21709 16.7296C7.22782 17.0231 7.15983 17.3201 7.12046 17.6421C7.00595 17.6421 6.88786 17.6421 6.76261 17.6421Z" />
                            </svg>
                          </span>
                          <span className=" font-normal text-base">
                            Address
                          </span>
                        </div>
                      </div>

                      <div className="item group">
                        <div
                          onClick={() => handleTabClick(4)}
                          className={`flex space-x-3 items-center cursor-pointer ${
                            activeTab === 4
                              ? "text-yellow-400"
                              : "text-slate-500 hover:text-black"
                          }`}
                        >
                          <span>
                            <svg
                              width={16}
                              height={19}
                              viewBox="0 0 16 19"
                              fill="none"
                              className="fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12.9919 6.43707V5.3498C12.9919 2.39616 10.5957 0 7.64208 0C4.68844 0 2.29227 2.39616 2.29227 5.3498V6.43707C0.900288 7.04304 0 8.41771 0 9.93435V14.5224C0.00346265 16.6311 1.71054 18.3417 3.82276 18.3451H11.4683C13.5771 18.3417 15.2876 16.6346 15.2911 14.5224V9.93781C15.2807 8.41771 14.3804 7.0465 12.9919 6.43707ZM8.40386 12.9953C8.40386 13.4178 8.06106 13.7606 7.63861 13.7606C7.21617 13.7606 6.87337 13.4178 6.87337 12.9953V11.4648C6.87337 11.0424 7.21617 10.6996 7.63861 10.6996C8.06106 10.6996 8.40386 11.0424 8.40386 11.4648V12.9953ZM11.4614 6.11505H3.81584V5.3498C3.81584 3.23758 5.52639 1.52703 7.63861 1.52703C9.75083 1.52703 11.4614 3.23758 11.4614 5.3498V6.11505Z" />
                            </svg>
                          </span>
                          <span className=" font-normal text-base">
                            Change Password
                          </span>
                        </div>
                      </div>

                      <div className="item group">
                        <div
                          onClick={() => handleLogout(5)}
                          className={`flex space-x-3 items-center cursor-pointer ${
                            activeTab === 5
                              ? "text-yellow-400"
                              : "text-slate-500 hover:text-black"
                          }`}
                        >
                          <span>
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                              className="fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.50224 15.7537C7.50224 16.0247 7.50895 16.2465 7.5 16.4683C7.4597 17.5682 6.52164 18.2515 5.4806 17.9155C4.00075 17.4383 2.52761 16.9387 1.05448 16.4392C0.380597 16.2107 0 15.6641 0 14.9405C0 10.4892 0 6.03569 0.00223881 1.58218C0.00223881 0.627852 0.629104 0.00955666 1.59403 0.00731646C4.28731 0.00283606 6.98284 -0.00164434 9.67612 0.000595862C11.0104 0.00283606 11.9798 0.961641 12 2.29904C12.0112 2.99126 12.0067 3.68124 12 4.37347C11.9955 4.90439 11.6933 5.25162 11.2478 5.25162C10.8022 5.25386 10.4955 4.90663 10.491 4.37571C10.4843 3.69693 10.4933 3.0159 10.4888 2.33712C10.4843 1.79276 10.209 1.50153 9.67388 1.49705C8.72463 1.48585 7.77761 1.49481 6.82836 1.49481C6.72313 1.49481 6.61791 1.49481 6.46791 1.49481C6.51492 1.55081 6.53284 1.59114 6.56418 1.60682C7.24254 1.91597 7.51119 2.46481 7.51119 3.1884C7.50672 6.72791 7.50895 10.2674 7.50895 13.8069C7.50895 13.9436 7.50895 14.0802 7.50895 14.2415C8.32164 14.2415 9.09179 14.2662 9.8597 14.2303C10.2649 14.2124 10.4888 13.8898 10.491 13.4396C10.4978 12.5031 10.4955 11.5645 10.4933 10.6259C10.4933 10.2854 10.594 10.0008 10.9119 9.83507C11.3888 9.58865 11.9754 9.89332 11.9888 10.4511C12.0179 11.5511 12.0493 12.6577 11.9664 13.7532C11.8746 14.9494 10.9052 15.7447 9.69403 15.7514C8.97537 15.7559 8.26343 15.7537 7.50224 15.7537Z" />
                              <path d="M13.4942 6.75005C13.4942 6.02423 13.5009 5.33425 13.492 4.64651C13.4875 4.27463 13.5927 3.96997 13.9532 3.81539C14.3136 3.66082 14.6046 3.79523 14.8688 4.06181C15.8002 5.0027 16.7405 5.93462 17.674 6.87326C18.1061 7.30786 18.1129 7.69094 17.6897 8.11882C16.7494 9.06642 15.8024 10.0073 14.8599 10.9549C14.6091 11.2058 14.327 11.3402 13.9755 11.1946C13.6129 11.0445 13.492 10.7533 13.4964 10.3769C13.5032 9.68695 13.4987 8.99473 13.4987 8.24875C13.3576 8.24875 13.2345 8.24875 13.1114 8.24875C12.2808 8.24875 11.4479 8.25099 10.6173 8.24651C10.0711 8.24427 9.75315 7.962 9.75987 7.4938C9.76435 7.03456 10.0912 6.75453 10.6352 6.75229C11.5666 6.75005 12.5024 6.75005 13.4942 6.75005Z" />
                            </svg>
                          </span>
                          <span className=" font-normal text-base">Logout</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="item-body dashboard-wrapper w-full">
                      {activeTab === 0 ? (
                        <React.Fragment>
                          <div className="welcome-msg w-full">
                            <div>
                              <p className="text-qblack text-lg">
                                Hello, Shovo
                              </p>
                              <h1 className="font-bold text-[24px] text-qblack">
                                Welcome to your Profile
                              </h1>
                            </div>
                          </div>
                          <div className="quick-view-grid w-full flex justify-between items-center mt-3 ">
                            <div className="qv-item w-[252px] h-[208px] bg-black group hover:bg-yellow-400 transition-all duration-300 ease-in-out p-6">
                              <div className="w-[62px] h-[62px] rounded bg-white flex justify-center items-center">
                                <span>
                                  <svg
                                    width={36}
                                    height={37}
                                    viewBox="0 0 36 37"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M32.4473 8.03086C32.482 8.37876 32.5 8.73144 32.5 9.08829C32.5 14.919 27.7564 19.6625 21.9258 19.6625C16.0951 19.6625 11.3516 14.919 11.3516 9.08829C11.3516 8.73144 11.3695 8.37876 11.4042 8.03086H8.98055L8.05537 0.628906H0.777344V2.74375H6.18839L8.56759 21.7774H34.1868L35.8039 8.03086H32.4473Z"
                                      fill="#FFBB38"
                                    />
                                    <path
                                      d="M9.09669 26.0074H6.06485C4.31566 26.0074 2.89258 27.4305 2.89258 29.1797C2.89258 30.9289 4.31566 32.352 6.06485 32.352H6.24672C6.12935 32.6829 6.06485 33.0386 6.06485 33.4094C6.06485 35.1586 7.48793 36.5816 9.23711 36.5816C11.4247 36.5816 12.9571 34.4091 12.2274 32.352H22.1081C21.377 34.413 22.9157 36.5816 25.0985 36.5816C26.8476 36.5816 28.2707 35.1586 28.2707 33.4094C28.2707 33.0386 28.2061 32.6829 28.0888 32.352H30.3856V30.2371H6.06485C5.48178 30.2371 5.00742 29.7628 5.00742 29.1797C5.00742 28.5966 5.48178 28.1223 6.06485 28.1223H33.4407L33.9384 23.8926H8.83233L9.09669 26.0074Z"
                                      fill="#FFBB38"
                                    />
                                    <path
                                      d="M21.9262 17.5477C26.5907 17.5477 30.3856 13.7528 30.3856 9.08829C30.3856 4.42378 26.5907 0.628906 21.9262 0.628906C17.2616 0.628906 13.4668 4.42378 13.4668 9.08829C13.4668 13.7528 17.2617 17.5477 21.9262 17.5477ZM20.8688 5.91602H22.9836V8.6503L24.7886 10.4554L23.2932 11.9508L20.8687 9.5262V5.91602H20.8688Z"
                                      fill="#FFBB38"
                                    />
                                  </svg>
                                </span>
                              </div>
                              <p className="text-xl text-white group-hover:text-qblacktext mt-5">
                                New Orders
                              </p>
                              <span className="text-[40px] text-white group-hover:text-qblacktext font-bold leading-none mt-1 block">
                                656
                              </span>
                            </div>
                            <div className="qv-item w-[252px] h-[208px] bg-black group hover:bg-yellow-400 transition-all duration-300 ease-in-out p-6">
                              <div className="w-[62px] h-[62px] rounded bg-white flex justify-center items-center">
                                <span>
                                  <svg
                                    width={33}
                                    height={27}
                                    viewBox="0 0 33 27"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M30.2253 12.8816H29.4827L28.6701 9.36514C28.376 8.10431 27.2552 7.22168 25.9662 7.22168H21.8474V3.84528C21.8474 2.03804 20.3764 0.581055 18.5831 0.581055H3.17237C1.46313 0.581055 0.0761719 1.96801 0.0761719 3.67717V20.0967C0.0761719 21.8058 1.46313 23.1928 3.17237 23.1928H4.29313C4.89555 25.1962 6.74485 26.6533 8.93037 26.6533C11.1159 26.6533 12.9792 25.1962 13.5816 23.1928C13.8455 23.1928 20.3459 23.1928 20.1942 23.1928C20.7966 25.1962 22.6459 26.6533 24.8315 26.6533C27.031 26.6533 28.8803 25.1962 29.4827 23.1928H30.2253C31.7663 23.1928 32.9992 21.9599 32.9992 20.4189V15.6555C32.9992 14.1145 31.7663 12.8816 30.2253 12.8816ZM8.93037 23.8513C7.78968 23.8513 6.88491 22.8969 6.88491 21.7918C6.88491 20.657 7.79558 19.7324 8.93037 19.7324C10.0652 19.7324 10.9898 20.657 10.9898 21.7918C10.9898 22.9151 10.0692 23.8513 8.93037 23.8513ZM13.9739 8.06224L9.79897 11.3125C9.20227 11.7767 8.30347 11.6903 7.82363 11.0604L6.21247 8.94486C5.7361 8.32843 5.86222 7.4458 6.47866 6.98346C7.08107 6.50717 7.96369 6.63321 8.44006 7.24965L9.19656 8.23035L12.2507 5.84867C12.8531 5.3864 13.7357 5.48448 14.2121 6.10092C14.6884 6.71727 14.5763 7.58595 13.9739 8.06224ZM24.8315 23.8513C23.6906 23.8513 22.7861 22.8969 22.7861 21.7918C22.7861 20.657 23.7107 19.7324 24.8315 19.7324C25.9662 19.7324 26.8909 20.657 26.8909 21.7918C26.8909 22.9166 25.9683 23.8513 24.8315 23.8513ZM22.618 10.0236H25.2798C25.6021 10.0236 25.8962 10.2337 26.0083 10.542L26.8629 13.0497C27.031 13.5541 26.6667 14.0724 26.1344 14.0724H22.618C22.1976 14.0724 21.8474 13.7222 21.8474 13.3019V10.7942C21.8474 10.3739 22.1976 10.0236 22.618 10.0236Z"
                                      fill="#FFBB38"
                                    />
                                  </svg>
                                </span>
                              </div>
                              <p className="text-xl text-white group-hover:text-qblacktext mt-5">
                                New Orders
                              </p>
                              <span className="text-[40px] text-white group-hover:text-qblacktext font-bold leading-none mt-1 block">
                                656
                              </span>
                            </div>
                            <div className="qv-item w-[252px] h-[208px] bg-black group hover:bg-yellow-400 transition-all duration-300 ease-in-out p-6">
                              <div className="w-[62px] h-[62px] rounded bg-white flex justify-center items-center">
                                <span>
                                  <svg
                                    width={27}
                                    height={31}
                                    viewBox="0 0 27 31"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.79749 18.4331C6.71621 20.0289 5.95627 20.8019 4.64859 23.6816C3.76653 22.8387 2.90107 22.0123 2.00953 21.1599C2.5288 20.3146 3.03267 19.4942 3.53535 18.6726C3.88035 18.1071 3.46066 17.0579 2.82282 16.899C1.88623 16.6666 0.94845 16.4426 0 16.2114C0 14.4034 0 12.6274 0 10.7827C0.921182 10.561 1.85422 10.3405 2.78489 10.1117C3.46777 9.94331 3.8922 8.90476 3.52705 8.30605C3.03385 7.49868 2.5371 6.6925 2.06051 5.91596C3.35514 4.62014 4.62251 3.35396 5.92426 2.05339C6.70673 2.53355 7.52832 3.03978 8.35347 3.54246C8.88698 3.8673 9.94331 3.44524 10.0927 2.84416C10.3262 1.90638 10.5491 0.965048 10.7839 0C12.5883 0 14.3785 0 16.2197 0C16.4366 0.906955 16.6548 1.8234 16.8777 2.73865C17.0555 3.46777 18.0763 3.89694 18.7082 3.50926C19.5144 3.01489 20.3182 2.52051 21.0829 2.05102C22.3763 3.34447 23.6318 4.59998 24.943 5.9124C24.4783 6.67235 23.9756 7.49038 23.4753 8.31079C23.1114 8.90713 23.5405 9.93976 24.2258 10.1081C25.1434 10.3334 26.0646 10.5503 27 10.7756C27 12.5954 27 14.3892 27 16.2197C26.1298 16.426 25.2667 16.6287 24.4048 16.8338C23.4658 17.0579 23.0651 18.0122 23.5654 18.8267C24.029 19.5819 24.4914 20.3383 24.9727 21.122C24.1487 22.004 23.3473 22.8612 22.4901 23.7776C21.5393 21.1741 19.8297 19.4243 17.3163 18.4592C20.5565 15.5332 19.8558 11.4668 17.659 9.41099C15.2973 7.19992 11.5995 7.26157 9.31378 9.56393C7.15368 11.7406 6.71858 15.6885 9.79749 18.4331Z"
                                      fill="#FFBB38"
                                    />
                                    <path
                                      d="M21.0695 30.3147C16.0415 30.3147 11.0847 30.3147 6.03891 30.3147C6.03891 29.9768 6.03416 29.6496 6.04009 29.3224C6.06262 28.0396 5.97963 26.7426 6.13612 25.4752C6.53566 22.2576 9.12611 19.9244 12.3722 19.8213C13.5886 19.7821 14.8417 19.7762 16.0249 20.0169C18.8643 20.5954 20.8916 23.0258 21.0552 25.9364C21.1359 27.3709 21.0695 28.8138 21.0695 30.3147Z"
                                      fill="#FFBB38"
                                    />
                                    <path
                                      d="M13.5375 17.9235C11.2244 17.9093 9.35005 16.0112 9.38325 13.7195C9.41763 11.4124 11.3169 9.55701 13.6157 9.58428C15.8849 9.61036 17.7486 11.5013 17.7403 13.7693C17.7332 16.0752 15.8481 17.9378 13.5375 17.9235Z"
                                      fill="#FFBB38"
                                    />
                                  </svg>
                                </span>
                              </div>
                              <p className="text-xl text-white group-hover:text-qblacktext mt-5">
                                New Orders
                              </p>
                              <span className="text-[40px] text-white group-hover:text-qblacktext font-bold leading-none mt-1 block">
                                656
                              </span>
                            </div>
                          </div>
                        </React.Fragment>
                      ) : activeTab === 1 ? (
                        <React.Fragment>
                          <div className="flex space-x-8">
                            <div className="w-[570px] ">
                              <div className="input-item flex space-x-2.5 mb-8">
                                <div className="w-1/2 h-full">
                                  <div className="input-com w-full h-full">
                                    <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                                      First Name*
                                    </label>
                                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                      <input
                                        placeholder="Demo Name"
                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-1/2 h-full">
                                  <div className="input-com w-full h-full">
                                    <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                                      Last Name*
                                    </label>
                                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                      <input
                                        placeholder="Demo Name"
                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="input-item flex space-x-2.5 mb-8">
                                <div className="w-1/2 h-full">
                                  <div className="input-com w-full h-full">
                                    <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                                      Email*
                                    </label>
                                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                      <input
                                        placeholder="demoemial@gmail.com"
                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                        type="email"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-1/2 h-full">
                                  <div className="input-com w-full h-full">
                                    <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                                      Phone Number*
                                    </label>
                                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                      <input
                                        placeholder="012 3 *******"
                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="input-item mb-8">
                                <div className="w-full">
                                  <div className="input-com w-full h-full">
                                    <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                                      Country*
                                    </label>
                                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                      <input
                                        placeholder="country"
                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="input-item mb-8">
                                <div className="w-full">
                                  <div className="input-com w-full h-full">
                                    <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                                      Address*
                                    </label>
                                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                      <input
                                        placeholder="your address here"
                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="input-item flex space-x-2.5 mb-8">
                                <div className="w-1/2 h-full">
                                  <div className="input-com w-full h-full">
                                    <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                                      Town / City*
                                    </label>
                                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                      <input
                                        placeholder
                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-1/2 h-full">
                                  <div className="input-com w-full h-full">
                                    <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                                      Postcode / ZIP*
                                    </label>
                                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                      <input
                                        placeholder
                                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                        type="text"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="update-logo w-full mb-9">
                                <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
                                  Update Profile
                                  <span className="ml-1">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M10 0C4.47457 0 0 4.47791 0 10C0 15.5221 4.47791 20 10 20C15.5221 20 20 15.5221 20 10C19.9967 4.48126 15.5221 0.00669344 10 0ZM10 16.67C9.53815 16.67 9.16667 16.2985 9.16667 15.8367C9.16667 15.3748 9.53815 15.0033 10 15.0033C10.4618 15.0033 10.8333 15.3748 10.8333 15.8367C10.8333 16.2952 10.4618 16.67 10 16.67ZM11.6098 10.425C11.1078 10.7396 10.8132 11.2952 10.8333 11.8842V12.5033C10.8333 12.9652 10.4618 13.3367 10 13.3367C9.53815 13.3367 9.16667 12.9652 9.16667 12.5033V11.8842C9.14324 10.6861 9.76907 9.56827 10.8032 8.96586C11.4357 8.61781 11.7704 7.90161 11.6366 7.19545C11.5027 6.52276 10.9772 5.99732 10.3046 5.8668C9.40094 5.69946 8.5308 6.29853 8.36346 7.20214C8.34673 7.30254 8.33668 7.40295 8.33668 7.50335C8.33668 7.96519 7.9652 8.33668 7.50335 8.33668C7.0415 8.33668 6.67002 7.96519 6.67002 7.50335C6.67002 5.66265 8.16265 4.17001 10.0067 4.17001C11.8474 4.17001 13.34 5.66265 13.34 7.50669C13.3333 8.71821 12.674 9.83601 11.6098 10.425Z"
                                        fill="#374557"
                                        fillOpacity="0.6"
                                      />
                                    </svg>
                                  </span>
                                </h1>
                                {/* <p className="text-sm text-qgraytwo mb-5 ">
                                  Profile of at least Size
                                  <span className="ml-1 text-qblack">
                                    300x300
                                  </span>
                                  . Gifs work too.
                                  <span className="ml-1 text-qblack">
                                    Max 5mb
                                  </span>
                                  .
                                </p> */}
                                <div className="flex xl:justify-center justify-start">
                                  <div className="relative">
                                    <div className="sm:w-[198px] sm:h-[198px] w-[199px] h-[199px] rounded-full overflow-hidden relative">
                                      <img
                                        src={`https://ui-avatars.com/api/name=concac`}
                                        alt
                                        className="object-cover w-full h-full"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="action-area flex space-x-4 items-center">
                            <button
                              type="button"
                              className="text-sm text-red-500 font-semibold"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="w-[164px] h-[50px] bg-black text-white text-sm"
                            >
                              Update Profile
                            </button>
                          </div>
                        </React.Fragment>
                      ) : activeTab === 2 ? (
                        <React.Fragment>
                          <div className="relative w-full overflow-x-auto sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                              <tbody>
                                <tr className="text-base text-gray-400 whitespace-nowrap px-2 border-b default-border-bottom ">
                                  <td className="py-4 block whitespace-nowrap text-center">
                                    Order
                                  </td>
                                  <td className="py-4 whitespace-nowrap text-center">
                                    Date
                                  </td>
                                  <td className="py-4 whitespace-nowrap text-center">
                                    Status
                                  </td>
                                  <td className="py-4 whitespace-nowrap text-center">
                                    Amount
                                  </td>
                                  <td className="py-4 whitespace-nowrap text-center">
                                    Action
                                  </td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                  <td className="text-center py-4">
                                    <span className="text-lg text-qgray font-medium">
                                      #354
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-base text-qgray whitespace-nowrap">
                                      Fub 05,2021
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-sm rounded text-green-500 bg-green-100 p-2">
                                      Complated
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-base text-qblack whitespace-nowrap px-2 ">
                                      $757
                                    </span>
                                  </td>
                                  <td className="text-center py-4">
                                    <button
                                      type="button"
                                      className="w-[116px] h-[46px] bg-qyellow text-qblack font-bold"
                                    >
                                      View Details
                                    </button>
                                  </td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                  <td className="text-center py-4">
                                    <span className="text-lg text-qgray font-medium">
                                      #354
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-base text-qgray whitespace-nowrap">
                                      Fub 05,2021
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-sm rounded text-green-500 bg-green-100 p-2">
                                      Complated
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-base text-qblack whitespace-nowrap px-2 ">
                                      $757
                                    </span>
                                  </td>
                                  <td className="text-center py-4">
                                    <button
                                      type="button"
                                      className="w-[116px] h-[46px] bg-qyellow text-qblack font-bold"
                                    >
                                      View Details
                                    </button>
                                  </td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                  <td className="text-center py-4">
                                    <span className="text-lg text-qgray font-medium">
                                      #354
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-base text-qgray whitespace-nowrap">
                                      Fub 05,2021
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-sm rounded text-green-500 bg-green-100 p-2">
                                      Complated
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-base text-qblack whitespace-nowrap px-2 ">
                                      $757
                                    </span>
                                  </td>
                                  <td className="text-center py-4">
                                    <button
                                      type="button"
                                      className="w-[116px] h-[46px] bg-qyellow text-qblack font-bold"
                                    >
                                      View Details
                                    </button>
                                  </td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                  <td className="text-center py-4">
                                    <span className="text-lg text-qgray font-medium">
                                      #354
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-base text-qgray whitespace-nowrap">
                                      Fub 05,2021
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-sm rounded text-green-500 bg-green-100 p-2">
                                      Complated
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-base text-qblack whitespace-nowrap px-2 ">
                                      $757
                                    </span>
                                  </td>
                                  <td className="text-center py-4">
                                    <button
                                      type="button"
                                      className="w-[116px] h-[46px] bg-qyellow text-qblack font-bold"
                                    >
                                      View Details
                                    </button>
                                  </td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                  <td className="text-center py-4">
                                    <span className="text-lg text-qgray font-medium">
                                      #354
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-base text-qgray whitespace-nowrap">
                                      Fub 05,2021
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-sm rounded text-green-500 bg-green-100 p-2">
                                      Complated
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-base text-qblack whitespace-nowrap px-2 ">
                                      $757
                                    </span>
                                  </td>
                                  <td className="text-center py-4">
                                    <button
                                      type="button"
                                      className="w-[116px] h-[46px] bg-qyellow text-qblack font-bold"
                                    >
                                      View Details
                                    </button>
                                  </td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                  <td className="text-center py-4">
                                    <span className="text-lg text-qgray font-medium">
                                      #354
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-base text-qgray whitespace-nowrap">
                                      Fub 05,2021
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-sm rounded text-green-500 bg-green-100 p-2">
                                      Complated
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-base text-qblack whitespace-nowrap px-2 ">
                                      $757
                                    </span>
                                  </td>
                                  <td className="text-center py-4">
                                    <button
                                      type="button"
                                      className="w-[116px] h-[46px] bg-qyellow text-qblack font-bold"
                                    >
                                      View Details
                                    </button>
                                  </td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-50">
                                  <td className="text-center py-4">
                                    <span className="text-lg text-qgray font-medium">
                                      #354
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-base text-qgray whitespace-nowrap">
                                      Fub 05,2021
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-sm rounded text-green-500 bg-green-100 p-2">
                                      Complated
                                    </span>
                                  </td>
                                  <td className="text-center py-4 px-2">
                                    <span className="text-base text-qblack whitespace-nowrap px-2 ">
                                      $757
                                    </span>
                                  </td>
                                  <td className="text-center py-4">
                                    <button
                                      type="button"
                                      className="w-[116px] h-[46px] bg-qyellow text-qblack font-bold"
                                    >
                                      View Details
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </React.Fragment>
                      ) : activeTab === 3 ? (
                        <React.Fragment>
                          <div className="grid grid-cols-2 gap-[30px]">
                            <div className="w-full bg-primarygray p-5 border">
                              <div className="flex justify-between items-center">
                                <p className="title text-[22px] font-semibold">
                                  Address #1
                                </p>
                                <button
                                  type="button"
                                  className="border border-qgray w-[34px] h-[34px] rounded-full flex justify-center items-center"
                                >
                                  <svg
                                    width={17}
                                    height={19}
                                    viewBox="0 0 17 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.7768 5.95215C15.6991 6.9104 15.6242 7.84603 15.5471 8.78237C15.3691 10.9285 15.1917 13.0747 15.0108 15.2209C14.9493 15.9473 14.9097 16.6773 14.8065 17.3988C14.6963 18.1726 14.0716 18.7161 13.2929 18.7196C10.3842 18.7323 7.47624 18.7337 4.56757 18.7189C3.70473 18.7146 3.08639 18.0794 3.00795 17.155C2.78181 14.493 2.57052 11.8302 2.35145 9.16821C2.2716 8.19442 2.1875 7.22133 2.10623 6.24824C2.09846 6.15638 2.09563 6.06451 2.08998 5.95286C6.65579 5.95215 11.2061 5.95215 15.7768 5.95215ZM5.25375 8.05803C5.25234 8.05803 5.25163 8.05803 5.25022 8.05803C5.27566 8.4573 5.3011 8.85657 5.32583 9.25584C5.46717 11.5228 5.60709 13.7891 5.75125 16.0561C5.77245 16.3897 5.99081 16.6038 6.28196 16.6024C6.58724 16.601 6.80066 16.3636 6.8056 16.0159C6.80702 15.9339 6.80136 15.8512 6.79571 15.7692C6.65367 13.4789 6.51304 11.1886 6.36888 8.89826C6.33849 8.41702 6.31164 7.93507 6.26146 7.45524C6.22966 7.1549 6.0318 6.99732 5.73076 6.99802C5.44526 6.99873 5.24033 7.2185 5.23043 7.52873C5.22619 7.7054 5.24598 7.88207 5.25375 8.05803ZM12.6102 8.05521C12.6088 8.05521 12.6074 8.05521 12.606 8.05521C12.6152 7.89055 12.6321 7.7259 12.6307 7.56195C12.6286 7.24465 12.4399 7.02417 12.1622 6.99873C11.888 6.97329 11.6484 7.16268 11.5961 7.46443C11.5665 7.63756 11.5615 7.81494 11.5502 7.9909C11.4626 9.38799 11.3749 10.7851 11.2887 12.1822C11.2103 13.4499 11.1276 14.7184 11.0576 15.9869C11.0379 16.3431 11.2463 16.5819 11.5495 16.6003C11.8562 16.6194 12.088 16.4017 12.1099 16.0505C12.2788 13.3856 12.4441 10.7208 12.6102 8.05521ZM9.45916 11.814C9.45916 10.4727 9.45986 9.13147 9.45916 7.79091C9.45916 7.25101 9.28603 6.99449 8.92845 6.99661C8.56805 6.99802 8.40198 7.24819 8.40198 7.79586C8.40127 10.4664 8.40127 13.1369 8.40268 15.8074C8.40268 15.948 8.37088 16.1289 8.44296 16.2194C8.56946 16.3763 8.76591 16.5748 8.93198 16.5741C9.09805 16.5734 9.29309 16.3727 9.41746 16.2151C9.48955 16.124 9.45704 15.9431 9.45704 15.8032C9.46057 14.4725 9.45916 13.1432 9.45916 11.814Z"
                                      fill="#EB5757"
                                    />
                                    <path
                                      d="M5.20143 2.75031C5.21486 2.49449 5.21839 2.2945 5.23747 2.09593C5.31733 1.25923 5.93496 0.648664 6.77449 0.637357C8.21115 0.618277 9.64923 0.618277 11.0859 0.637357C11.9254 0.648664 12.5438 1.25852 12.6236 2.09522C12.6427 2.2938 12.6462 2.49379 12.6582 2.73335C12.7854 2.739 12.9084 2.74889 13.0314 2.7496C13.9267 2.75101 14.8221 2.74677 15.7174 2.75172C16.4086 2.75525 16.8757 3.18774 16.875 3.81244C16.8742 4.43643 16.4078 4.87103 15.716 4.87174C11.1926 4.87386 6.66849 4.87386 2.14508 4.87174C1.45324 4.87103 0.986135 4.43713 0.985429 3.81314C0.984722 3.18915 1.45183 2.75525 2.14296 2.75243C3.15421 2.74677 4.16545 2.75031 5.20143 2.75031ZM11.5799 2.73335C11.5799 2.59625 11.5806 2.49096 11.5799 2.38637C11.5749 1.86626 11.4018 1.69313 10.876 1.69242C9.55878 1.69101 8.24225 1.68959 6.92501 1.69313C6.48546 1.69454 6.30031 1.87545 6.28265 2.3051C6.27699 2.4422 6.28194 2.58 6.28194 2.73335C8.05851 2.73335 9.7941 2.73335 11.5799 2.73335Z"
                                      fill="#EB5757"
                                    />
                                  </svg>
                                </button>
                              </div>
                              <div className="mt-5">
                                <table>
                                  <tbody>
                                    <tr className="flex mb-3">
                                      <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                                        <p>Name:</p>
                                      </td>
                                      <td className="text-base text-qblack line-clamp-1 font-medium">
                                        Shuvo Khan
                                      </td>
                                    </tr>
                                    <tr className="flex mb-3">
                                      <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                                        <p>Email:</p>
                                      </td>
                                      <td className="text-base text-qblack line-clamp-1 font-medium">
                                        rafiqulislamsuvobd@gmail.com
                                      </td>
                                    </tr>
                                    <tr className="flex mb-3">
                                      <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                                        <p>Phone:</p>
                                      </td>
                                      <td className="text-base text-qblack line-clamp-1 font-medium">
                                        01792166627
                                      </td>
                                    </tr>
                                    <tr className="flex mb-3">
                                      <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                                        <p>country:</p>
                                      </td>
                                      <td className="text-base text-qblack line-clamp-1 font-medium">
                                        Dhaka,Bangldesh
                                      </td>
                                    </tr>
                                    <tr className="flex mb-3">
                                      <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                                        <p>state:</p>
                                      </td>
                                      <td className="text-base text-qblack line-clamp-1 font-medium">
                                        Barishal
                                      </td>
                                    </tr>
                                    <tr className="flex mb-3">
                                      <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                                        <p>City:</p>
                                      </td>
                                      <td className="text-base text-qblack line-clamp-1 font-medium">
                                        banaripara
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div className="w-full bg-primarygray p-5 border">
                              <div className="flex justify-between items-center">
                                <p className="title text-[22px] font-semibold">
                                  Address #1
                                </p>
                                <button
                                  type="button"
                                  className="border border-qgray w-[34px] h-[34px] rounded-full flex justify-center items-center"
                                >
                                  <svg
                                    width={17}
                                    height={19}
                                    viewBox="0 0 17 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.7768 5.95215C15.6991 6.9104 15.6242 7.84603 15.5471 8.78237C15.3691 10.9285 15.1917 13.0747 15.0108 15.2209C14.9493 15.9473 14.9097 16.6773 14.8065 17.3988C14.6963 18.1726 14.0716 18.7161 13.2929 18.7196C10.3842 18.7323 7.47624 18.7337 4.56757 18.7189C3.70473 18.7146 3.08639 18.0794 3.00795 17.155C2.78181 14.493 2.57052 11.8302 2.35145 9.16821C2.2716 8.19442 2.1875 7.22133 2.10623 6.24824C2.09846 6.15638 2.09563 6.06451 2.08998 5.95286C6.65579 5.95215 11.2061 5.95215 15.7768 5.95215ZM5.25375 8.05803C5.25234 8.05803 5.25163 8.05803 5.25022 8.05803C5.27566 8.4573 5.3011 8.85657 5.32583 9.25584C5.46717 11.5228 5.60709 13.7891 5.75125 16.0561C5.77245 16.3897 5.99081 16.6038 6.28196 16.6024C6.58724 16.601 6.80066 16.3636 6.8056 16.0159C6.80702 15.9339 6.80136 15.8512 6.79571 15.7692C6.65367 13.4789 6.51304 11.1886 6.36888 8.89826C6.33849 8.41702 6.31164 7.93507 6.26146 7.45524C6.22966 7.1549 6.0318 6.99732 5.73076 6.99802C5.44526 6.99873 5.24033 7.2185 5.23043 7.52873C5.22619 7.7054 5.24598 7.88207 5.25375 8.05803ZM12.6102 8.05521C12.6088 8.05521 12.6074 8.05521 12.606 8.05521C12.6152 7.89055 12.6321 7.7259 12.6307 7.56195C12.6286 7.24465 12.4399 7.02417 12.1622 6.99873C11.888 6.97329 11.6484 7.16268 11.5961 7.46443C11.5665 7.63756 11.5615 7.81494 11.5502 7.9909C11.4626 9.38799 11.3749 10.7851 11.2887 12.1822C11.2103 13.4499 11.1276 14.7184 11.0576 15.9869C11.0379 16.3431 11.2463 16.5819 11.5495 16.6003C11.8562 16.6194 12.088 16.4017 12.1099 16.0505C12.2788 13.3856 12.4441 10.7208 12.6102 8.05521ZM9.45916 11.814C9.45916 10.4727 9.45986 9.13147 9.45916 7.79091C9.45916 7.25101 9.28603 6.99449 8.92845 6.99661C8.56805 6.99802 8.40198 7.24819 8.40198 7.79586C8.40127 10.4664 8.40127 13.1369 8.40268 15.8074C8.40268 15.948 8.37088 16.1289 8.44296 16.2194C8.56946 16.3763 8.76591 16.5748 8.93198 16.5741C9.09805 16.5734 9.29309 16.3727 9.41746 16.2151C9.48955 16.124 9.45704 15.9431 9.45704 15.8032C9.46057 14.4725 9.45916 13.1432 9.45916 11.814Z"
                                      fill="#EB5757"
                                    />
                                    <path
                                      d="M5.20143 2.75031C5.21486 2.49449 5.21839 2.2945 5.23747 2.09593C5.31733 1.25923 5.93496 0.648664 6.77449 0.637357C8.21115 0.618277 9.64923 0.618277 11.0859 0.637357C11.9254 0.648664 12.5438 1.25852 12.6236 2.09522C12.6427 2.2938 12.6462 2.49379 12.6582 2.73335C12.7854 2.739 12.9084 2.74889 13.0314 2.7496C13.9267 2.75101 14.8221 2.74677 15.7174 2.75172C16.4086 2.75525 16.8757 3.18774 16.875 3.81244C16.8742 4.43643 16.4078 4.87103 15.716 4.87174C11.1926 4.87386 6.66849 4.87386 2.14508 4.87174C1.45324 4.87103 0.986135 4.43713 0.985429 3.81314C0.984722 3.18915 1.45183 2.75525 2.14296 2.75243C3.15421 2.74677 4.16545 2.75031 5.20143 2.75031ZM11.5799 2.73335C11.5799 2.59625 11.5806 2.49096 11.5799 2.38637C11.5749 1.86626 11.4018 1.69313 10.876 1.69242C9.55878 1.69101 8.24225 1.68959 6.92501 1.69313C6.48546 1.69454 6.30031 1.87545 6.28265 2.3051C6.27699 2.4422 6.28194 2.58 6.28194 2.73335C8.05851 2.73335 9.7941 2.73335 11.5799 2.73335Z"
                                      fill="#EB5757"
                                    />
                                  </svg>
                                </button>
                              </div>
                              <div className="mt-5">
                                <table>
                                  <tbody>
                                    <tr className="flex mb-3">
                                      <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                                        <p>Name:</p>
                                      </td>
                                      <td className="text-base text-qblack line-clamp-1 font-medium">
                                        Shuvo Khan
                                      </td>
                                    </tr>
                                    <tr className="flex mb-3">
                                      <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                                        <p>Email:</p>
                                      </td>
                                      <td className="text-base text-qblack line-clamp-1 font-medium">
                                        rafiqulislamsuvobd@gmail.com
                                      </td>
                                    </tr>
                                    <tr className="flex mb-3">
                                      <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                                        <p>Phone:</p>
                                      </td>
                                      <td className="text-base text-qblack line-clamp-1 font-medium">
                                        01792166627
                                      </td>
                                    </tr>
                                    <tr className="flex mb-3">
                                      <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                                        <p>country:</p>
                                      </td>
                                      <td className="text-base text-qblack line-clamp-1 font-medium">
                                        Dhaka,Bangldesh
                                      </td>
                                    </tr>
                                    <tr className="flex mb-3">
                                      <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                                        <p>state:</p>
                                      </td>
                                      <td className="text-base text-qblack line-clamp-1 font-medium">
                                        Barishal
                                      </td>
                                    </tr>
                                    <tr className="flex mb-3">
                                      <td className="text-base text-qgraytwo w-[70px] block line-clamp-1">
                                        <p>City:</p>
                                      </td>
                                      <td className="text-base text-qblack line-clamp-1 font-medium">
                                        banaripara
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div className="w-[180px] h-[50px] mt-4">
                            <button
                              type="button"
                              className="flex h-full w-full items-center justify-center opacity-1 text-sx font-bold leading-0"
                            >
                              <div className="w-full text-sm font-semibold">
                                Add New Address
                              </div>
                            </button>
                          </div>
                        </React.Fragment>
                      ) : activeTab === 4 ? (
                        <React.Fragment>
                          <div className="changePasswordTab w-full">
                            <div className="w-full flex xl:flex-row flex-col-reverse space-x-5 xl:items-center">
                              <div className="w-[397px] mb-10">
                                <div className="input-field mb-6">
                                  <label
                                    className="input-label text-gray-500 text-sm block mb-2.5"
                                    htmlfor="old_password"
                                  >
                                    Old Password*
                                  </label>
                                  <div className="input-wrapper border border-[#E8E8E8] w-full h-[58px] overflow-hidden relative ">
                                    <input
                                      placeholder="● ● ● ● ● ●"
                                      className="input-field placeholder:text-base text-bese px-4 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                                      type="password"
                                      id="old_password"
                                    />
                                  </div>
                                </div>
                                <div className="input-field mb-6">
                                  <label
                                    className="input-label text-qgray text-sm block mb-2.5"
                                    htmlfor="old_password"
                                  >
                                    Password*
                                  </label>
                                  <div className="input-wrapper border border-[#E8E8E8] w-full h-[58px] overflow-hidden relative ">
                                    <input
                                      placeholder="● ● ● ● ● ●"
                                      className="input-field placeholder:text-base text-bese px-4 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                                      type="password"
                                      id="new_password"
                                    />
                                  </div>
                                </div>
                                <div className="input-field mb-6">
                                  <label
                                    className="input-label text-qgray text-sm block mb-2.5"
                                    htmlfor="old_password"
                                  >
                                    Re-enter Password*
                                  </label>
                                  <div className="input-wrapper border border-[#E8E8E8] w-full h-[58px] overflow-hidden relative ">
                                    <input
                                      placeholder="● ● ● ● ● ●"
                                      className="input-field placeholder:text-base text-bese px-4 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                                      type="password"
                                      id="confirm_password"
                                    />
                                  </div>
                                </div>
                                <div className="w-full mt-[30px] flex justify-start">
                                  <div className="sm:flex sm:space-x-[30px] items-center">
                                    <div className="w-[180px] h-[50px]">
                                      <button
                                        type="button"
                                        className="flex w-full h-full items-center justify-center leading-0 opacity-1 bg-yellow-400"
                                      >
                                        <div className="w-full text-sm font-semibold">
                                          Upldate Password
                                        </div>
                                      </button>
                                    </div>
                                    <button type="button">
                                      <div className="w-full text-sm font-semibold text-black mb-5 sm:mb-0">
                                        Cancel
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-1 sm:flex hidden justify-end">
                                <svg
                                  width="{311}"
                                  height="{320}"
                                  viewBox="0 0 311 320"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M43.9609 15.5003C42.9344 63.9537 39.6038 231.09 41.1933 290.317C41.3615 296.591 45.661 301.627 51.0247 301.833C77.5522 302.848 174.8 305.422 218.189 303.293C227.226 302.849 234.413 294.286 234.601 283.707C235.503 232.848 237.493 89.8032 232.764 24.2731C232.197 16.4217 226.93 10.1698 220.228 9.38553C191.339 6.00406 93.6731 -2.25993 56.186 0.586175C49.4263 1.09942 44.1279 7.57699 43.9609 15.5003Z"
                                    fill="#3EA2E5"
                                  />
                                  <path
                                    d="M55.797 30.3671C54.369 69.4769 49.8648 199.585 51.295 247.695C51.5041 254.727 56.2417 260.414 62.2458 260.824C86.9681 262.516 171.314 266.249 207.575 262.852C214.105 262.24 219.228 256.062 219.581 248.411C221.419 208.511 226.695 87.3622 225.324 39.7903C225.105 32.2011 220.08 26.0034 213.616 25.3242C186.87 22.5146 97.2431 15.8302 66.4293 17.7969C60.6452 18.1675 56.0448 23.5964 55.797 30.3671Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M122.112 10.1991C122.112 11.6858 123.102 12.9125 124.372 12.9899C130.637 13.3738 148.288 14.46 156.175 14.9954C157.731 15.1016 158.952 13.4656 158.657 11.6758L158.607 11.3705C158.405 10.1494 157.539 9.23016 156.481 9.11733C151.149 8.54546 135.059 6.96036 124.399 7.40613C123.118 7.45923 122.112 8.70032 122.112 10.1991Z"
                                    fill="url(#paint0_linear_116_1151)"
                                  />
                                  <path
                                    d="M134.44 112.39C154.875 112.39 171.44 95.8239 171.44 75.3891C171.44 54.9543 154.875 38.3887 134.44 38.3887C114.005 38.3887 97.4395 54.9543 97.4395 75.3891C97.4395 95.8239 114.005 112.39 134.44 112.39Z"
                                    fill="url(#paint1_linear_116_1151)"
                                  />
                                  <path
                                    d="M145.769 61.4069C145.769 67.6721 140.69 74.4362 134.425 74.4362C128.159 74.4362 123.08 67.6721 123.08 61.4069C123.08 55.1417 128.159 50.6973 134.425 50.6973C140.69 50.6973 145.769 55.1417 145.769 61.4069Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M120.347 98.5602H148.04C150.955 98.5602 153.537 96.6765 154.425 93.9001L155.915 89.2421C157.006 85.8319 155.232 82.1396 151.87 80.9106C140.599 76.7903 128.946 77.319 117.009 81.2911C113.665 82.4039 111.809 85.9812 112.731 89.3826L113.878 93.6125C114.67 96.5327 117.32 98.5602 120.347 98.5602Z"
                                    fill="white"
                                  />
                                  <g opacity="0.5">
                                    <path
                                      opacity="0.65"
                                      d="M205.407 171.483H70.3673C69.9547 171.483 69.6206 171.149 69.6206 170.737V151.224C69.6206 150.812 69.9547 150.478 70.3673 150.478H205.407C205.82 150.478 206.154 150.812 206.154 151.224V170.737C206.154 171.148 205.82 171.483 205.407 171.483Z"
                                      fill="#FFBB38"
                                    />
                                    <path
                                      opacity="0.65"
                                      d="M204.671 205.757H69.6309C69.2183 205.757 68.8843 205.423 68.8843 205.01V185.498C68.8843 185.085 69.2183 184.751 69.6309 184.751H204.671C205.084 184.751 205.418 185.085 205.418 185.498V205.01C205.418 205.421 205.084 205.757 204.671 205.757Z"
                                      fill="#FFBB38"
                                    />
                                    <path
                                      opacity="0.65"
                                      d="M178.306 246.63H91.9473C91.4385 246.63 91.0259 246.218 91.0259 245.709V220.772C91.0259 220.263 91.4385 219.851 91.9473 219.851H178.306C178.815 219.851 179.227 220.263 179.227 220.772V245.709C179.227 246.218 178.815 246.63 178.306 246.63Z"
                                      fill="#FFBB38"
                                    />
                                  </g>
                                  <path
                                    opacity="0.75"
                                    d="M155.663 166.906H76.9963C76.2629 166.906 75.6689 166.312 75.6689 165.579V156.564C75.6689 155.83 76.2629 155.236 76.9963 155.236H155.664C156.397 155.236 156.991 155.83 156.991 156.564V165.579C156.99 166.311 156.396 166.906 155.663 166.906Z"
                                    fill="white"
                                  />
                                  <g opacity="0.75">
                                    <path
                                      d="M80.3307 199.101C82.7752 198.088 83.936 195.286 82.9235 192.841C81.9109 190.397 79.1084 189.236 76.6639 190.249C74.2194 191.261 73.0586 194.064 74.0712 196.508C75.0838 198.953 77.8862 200.113 80.3307 199.101Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M91.6379 199.707C94.2837 199.707 96.4286 197.562 96.4286 194.917C96.4286 192.271 94.2837 190.126 91.6379 190.126C88.992 190.126 86.8472 192.271 86.8472 194.917C86.8472 197.562 88.992 199.707 91.6379 199.707Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M108.946 196.644C109.554 194.069 107.959 191.489 105.384 190.881C102.809 190.273 100.229 191.867 99.6209 194.442C99.0129 197.017 100.607 199.597 103.182 200.205C105.757 200.813 108.338 199.219 108.946 196.644Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M117.434 200.566C120.08 200.566 122.225 198.421 122.225 195.775C122.225 193.129 120.08 190.984 117.434 190.984C114.788 190.984 112.644 193.129 112.644 195.775C112.644 198.421 114.788 200.566 117.434 200.566Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M130.578 200.445C133.224 200.445 135.369 198.3 135.369 195.654C135.369 193.008 133.224 190.863 130.578 190.863C127.932 190.863 125.788 193.008 125.788 195.654C125.788 198.3 127.932 200.445 130.578 200.445Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M143.723 200.691C146.369 200.691 148.514 198.546 148.514 195.9C148.514 193.254 146.369 191.109 143.723 191.109C141.077 191.109 138.932 193.254 138.932 195.9C138.932 198.546 141.077 200.691 143.723 200.691Z"
                                      fill="white"
                                    />
                                  </g>
                                  <path
                                    d="M198.433 211.538L213.11 215.207L209.441 242.728C209.441 242.728 214.945 248.232 216.779 255.57C218.614 262.908 220.305 293.722 220.305 293.722L223.788 295.827L224.211 297.585L214.079 311.208L215.759 300.365C216.026 298.643 215.563 295.152 215.709 295.079C210.205 280.402 198.433 239.057 198.433 239.057V211.538Z"
                                    fill="url(#paint2_linear_116_1151)"
                                  />
                                  <path
                                    d="M194.144 297.772C194.303 297.77 194.459 297.782 194.618 297.772C193.909 288.924 190.668 249.982 187.424 235.387C183.755 218.875 192.928 185.852 192.928 185.852L209.441 202.363L200.267 233.552C206.553 242.982 199.242 298.203 199.399 298.179L199.389 298.302L201.783 301.593L201.492 303.377L186.87 312.006L192.623 302.662C193.536 301.18 194.041 299.499 194.144 297.772Z"
                                    fill="url(#paint3_linear_116_1151)"
                                  />
                                  <path
                                    d="M212.715 112.62C212.715 112.62 244.864 148.854 212.715 167.432L209.44 165.06C209.44 165.06 225.4 149.777 209.44 131.066L212.715 112.62Z"
                                    fill="url(#paint4_linear_116_1151)"
                                  />
                                  <path
                                    d="M185.906 313.362H190.572C191.446 313.362 192.269 312.961 192.802 312.269C194.257 310.378 197.271 306.69 198.713 306.594C200.653 306.465 200.405 313.362 200.405 313.362H201.492L202.869 304.791C203.216 302.635 202.144 300.498 200.207 299.488C200.207 299.488 199.763 302.768 197.359 304.218C194.954 305.669 187.574 310.864 187.574 310.864C187.574 310.864 186.67 310.734 185.677 310.915C184.204 311.181 184.409 313.362 185.906 313.362Z"
                                    fill="url(#paint5_linear_116_1151)"
                                  />
                                  <path
                                    d="M213.717 312.829L218.017 311.02C218.822 310.681 219.426 309.992 219.649 309.147C220.257 306.841 221.604 302.272 222.895 301.625C224.633 300.754 227.079 307.207 227.079 307.207L228.081 306.785L226.027 298.351C225.51 296.23 223.693 294.675 221.517 294.495C221.517 294.495 222.38 297.69 220.726 299.959C219.072 302.229 214.284 309.88 214.284 309.88C214.284 309.88 213.401 310.113 212.555 310.662C211.302 311.48 212.337 313.41 213.717 312.829Z"
                                    fill="url(#paint6_linear_116_1151)"
                                  />
                                  <path
                                    d="M188.723 157.932C188.723 157.932 189.263 161.239 188.472 170.33C187.681 179.422 183.902 200.767 184.672 221.19C184.672 221.19 195.415 223.693 214.079 222.507C214.079 222.507 221.956 190.621 220.037 178.499C218.118 166.377 207.709 157.682 207.709 157.682L188.723 157.932Z"
                                    fill="url(#paint7_linear_116_1151)"
                                  />
                                  <path
                                    d="M196.661 97.1826L195.348 112.621H207.822L204.72 89.0547L196.661 97.1826Z"
                                    fill="url(#paint8_linear_116_1151)"
                                  />
                                  <path
                                    d="M211.517 110.485C207.212 110.247 197.587 109.808 190.767 110.18C187.177 110.376 184.169 112.951 183.435 116.472L181.771 124.442C181.151 127.411 181.244 130.484 182.041 133.411L188.721 157.933C188.721 157.933 194.663 161.504 207.707 157.683C207.707 157.683 219.162 130.366 214.473 112.891C214.11 111.533 212.921 110.563 211.517 110.485Z"
                                    fill="url(#paint9_linear_116_1151)"
                                  />
                                  <path
                                    d="M183.761 115.042C181.924 119.883 180.263 124.958 178.481 129.712C177.574 132.091 176.655 134.423 175.672 136.564C175.174 137.631 174.628 138.611 174.127 139.5C173.624 140.379 173.059 141.112 172.764 141.449C172.706 141.499 172.9 141.538 172.964 141.54C173.003 141.544 171.722 141.75 171.329 141.815L169.794 141.806C167.593 141.693 165.099 141.305 162.599 140.82C157.555 139.879 152.312 138.559 146.928 137.56L146.887 137.552C145.857 137.361 144.866 138.041 144.676 139.072C144.549 139.751 144.805 140.415 145.287 140.842C147.459 142.753 149.759 144.323 152.146 145.85C153.348 146.585 154.57 147.305 155.813 147.996C157.081 148.642 158.351 149.293 159.67 149.896C162.327 151.054 165.073 152.12 168.235 152.805C169.066 152.944 169.887 153.09 170.742 153.204C171.701 153.237 172.571 153.322 173.619 153.262C174.175 153.206 174.734 153.138 175.291 153.057C175.589 153.005 175.807 152.999 176.167 152.9C176.549 152.785 176.931 152.656 177.307 152.516C178.092 152.234 178.6 151.893 179.238 151.538C179.768 151.189 180.251 150.824 180.719 150.45C182.448 148.977 183.521 147.515 184.468 146.113C185.411 144.711 186.159 143.306 186.831 141.929C188.178 139.179 189.229 136.455 190.083 133.712C191.812 128.214 192.983 122.811 193.477 117.072C193.714 114.323 191.678 111.903 188.929 111.666C186.654 111.47 184.604 112.831 183.831 114.865L183.761 115.042Z"
                                    fill="url(#paint10_linear_116_1151)"
                                  />
                                  <path
                                    d="M148.622 140.026L146.397 134.742L134.681 131.823C134.681 131.823 133.744 133.854 138.664 134.742C138.664 134.742 136.906 136.685 137.844 138.97C138.781 141.254 148.74 143.544 148.622 140.026Z"
                                    fill="url(#paint11_linear_116_1151)"
                                  />
                                  <path
                                    d="M191.379 79.3506C190.934 79.6128 187.425 91.9916 190.365 97.1805C193.306 102.371 202.287 96.5578 204.721 89.0526C207.155 81.5496 203.244 72.3532 191.379 79.3506Z"
                                    fill="url(#paint12_linear_116_1151)"
                                  />
                                  <path
                                    d="M214.656 89.0538C216.67 98.9228 223.344 96.2227 228.072 100.613C235.734 107.73 246.694 100.393 257.349 107.137C265.042 112.006 268.748 124.461 265.057 134.518C259.944 148.447 242.472 154.175 233.417 149.932C224.764 145.878 225.996 133.735 214.351 129.042C209.408 127.05 206.968 128.344 204.008 125.392C198.826 120.223 200.224 110.191 200.763 106.326C201.932 97.9405 204.742 96.4229 203.4 92.7372C200.786 85.5694 188.595 87.0483 187.58 81.9877C186.655 77.3795 195.491 68.6443 203.806 70.0215C216.67 72.1508 213.757 84.6569 214.656 89.0538Z"
                                    fill="url(#paint13_linear_116_1151)"
                                  />
                                  <path
                                    opacity="0.6"
                                    d="M261.214 132.158C261.367 132.158 261.504 132.055 261.542 131.9C263.189 125.062 262.442 119.454 259.32 115.232C254.138 108.225 244.069 107.531 243.969 107.524C243.81 107.498 243.623 107.654 243.612 107.841C243.601 108.027 243.742 108.186 243.928 108.197C244.026 108.203 253.79 108.881 258.781 115.637C261.776 119.691 262.485 125.11 260.887 131.743C260.844 131.924 260.955 132.106 261.136 132.149C261.161 132.155 261.189 132.158 261.214 132.158Z"
                                    fill="white"
                                  />
                                  <path
                                    opacity="0.72"
                                    d="M228.235 138.42C228.248 138.42 228.264 138.418 228.278 138.415C228.368 138.391 228.422 138.299 228.399 138.209C226.795 132.053 223.979 127.778 220.032 125.502C217.16 123.845 214.471 123.691 212.1 123.555C209.812 123.423 207.837 123.309 206.247 121.896C202.961 118.973 203.151 111.946 206.813 101.009C206.842 100.921 206.794 100.826 206.706 100.796C206.618 100.766 206.523 100.815 206.493 100.902C202.784 111.978 202.626 119.125 206.023 122.146C207.7 123.638 209.729 123.755 212.08 123.89C214.415 124.024 217.061 124.176 219.864 125.793C223.73 128.021 226.492 132.228 228.073 138.294C228.092 138.37 228.161 138.42 228.235 138.42Z"
                                    fill="white"
                                  />
                                  <path
                                    opacity="0.72"
                                    d="M209.889 86.6043C209.907 86.6043 209.925 86.6021 209.943 86.5954C210.032 86.5656 210.078 86.4693 210.05 86.3819C208.774 82.5879 205.1 83.1509 201.206 83.7504C198.741 84.1298 196.194 84.5192 194.033 83.8798C192.42 83.402 191.462 82.6609 191.185 81.6775C190.712 80.0028 192.369 78.1368 192.386 78.1168C192.449 78.0483 192.442 77.941 192.373 77.879C192.305 77.8171 192.198 77.8226 192.136 77.8912C192.061 77.973 190.339 79.9132 190.86 81.7671C191.171 82.8688 192.205 83.6885 193.936 84.2006C196.171 84.8621 198.756 84.4661 201.257 84.0812C205.165 83.4816 208.544 82.9606 209.73 86.4881C209.753 86.56 209.819 86.6043 209.889 86.6043Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M247.021 49.021C247.021 31.239 261.735 16.8259 279.391 16.8281C296.526 16.8304 310.049 30.4848 310.049 47.3258C310.049 64.1668 296.526 78.5482 279.391 79.4723C261.734 80.4246 247.021 66.803 247.021 49.021Z"
                                    fill="#27AE60"
                                  />
                                  <path
                                    d="M249.976 48.9447C249.976 32.8296 263.311 19.7674 279.313 19.7686C294.842 19.7708 307.098 32.1456 307.098 47.4081C307.098 62.6705 294.842 75.7044 279.313 76.5423C263.311 77.4052 249.976 65.0599 249.976 48.9447Z"
                                    fill="#27AE60"
                                  />
                                  <path
                                    d="M269.808 47.1152H267.178V36.3892C267.178 32.1767 270.259 28.6164 274.344 28.108L279.72 27.4387C282.034 27.1511 284.361 27.8928 286.105 29.4759C287.85 31.0579 288.851 33.334 288.851 35.7199V45.0837H286.222V35.7199C286.222 34.104 285.544 32.5617 284.362 31.4904C283.181 30.4192 281.603 29.9153 280.036 30.1112L274.66 30.7804C271.893 31.1247 269.806 33.5367 269.806 36.3892V47.1152H269.808Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M266.4 44.7088L289.447 43.402C290.383 43.3488 291.17 44.112 291.17 45.0712V63.7625C291.17 64.6854 290.439 65.4339 289.537 65.4339H267.045C266.164 65.4339 265.441 64.7183 265.412 63.8169L264.858 46.4335C264.83 45.5241 265.514 44.7586 266.4 44.7088Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M281.771 60.0776L280.376 55.9715C280.208 55.4778 280.323 54.9263 280.681 54.5538C281.396 53.8121 281.822 52.7782 281.772 51.6424C281.684 49.6392 280.085 48.0165 278.128 47.9395C275.963 47.8545 274.181 49.6267 274.181 51.8247C274.181 53.0443 274.729 54.1314 275.588 54.8448C276.032 55.214 276.216 55.8221 276.028 56.3758L274.77 60.0776C274.464 60.9779 275.118 61.9177 276.048 61.9177H280.493C281.424 61.9189 282.077 60.9779 281.771 60.0776Z"
                                    fill="#27AE60"
                                  />
                                  <path
                                    d="M71.6147 264.57C71.7164 264.335 71.6644 264.057 71.4852 263.879L66.3749 258.799C67.0087 255.419 67.1348 251.907 66.6934 248.388L72.0969 243.691C72.2861 243.526 72.3558 243.253 72.2684 243.01L69.2918 234.72C69.2044 234.478 68.9809 234.319 68.7354 234.326L61.7158 234.521C59.8342 231.571 57.5301 229.014 54.9263 226.909L55.5756 219.561C55.5988 219.304 55.4628 219.059 55.2382 218.952L47.5572 215.286C47.3326 215.179 47.0683 215.233 46.899 215.421L42.0751 220.776C38.8552 220.102 35.5102 219.962 32.1619 220.416L27.6754 214.73C27.5183 214.531 27.2584 214.458 27.0272 214.548L19.1404 217.654C18.9103 217.745 18.7599 217.98 18.7676 218.238L18.97 225.612C16.1649 227.581 13.738 229.994 11.7403 232.724L4.74284 232.025C4.49728 232.001 4.26499 232.143 4.16322 232.378L0.691044 240.438C0.589279 240.673 0.641268 240.951 0.820463 241.129L5.93084 246.208C5.29702 249.589 5.17092 253.101 5.61227 256.619L0.208766 261.318C0.019616 261.483 -0.0500705 261.756 0.0373147 261.998L3.01394 270.289C3.10133 270.531 3.32477 270.689 3.57033 270.683L10.5899 270.488C12.4715 273.438 14.7755 275.994 17.3783 278.099L16.729 285.448C16.7058 285.705 16.8418 285.95 17.0664 286.057L24.7474 289.723C24.972 289.83 25.2363 289.776 25.4056 289.588L30.2295 284.233C33.4494 284.907 36.7944 285.047 40.1427 284.593L44.6292 290.279C44.7863 290.478 45.0473 290.551 45.2774 290.461L53.1642 287.355C53.3943 287.264 53.5447 287.029 53.5381 286.77L53.3357 279.397C56.1397 277.428 58.5677 275.014 60.5654 272.284L67.5629 272.984C67.8084 273.008 68.0407 272.866 68.1425 272.631L71.6147 264.57Z"
                                    fill="#FFBB38"
                                  />
                                  <path
                                    opacity="0.7"
                                    d="M43.7425 248.564C45.5831 252.452 44.4836 257.279 40.9948 259.821C37.1598 262.615 31.8692 261.606 29.2 257.572C27.9058 255.618 27.4147 253.254 27.8129 250.915C28.2123 248.577 29.4545 246.543 31.3117 245.19C35.1467 242.396 40.4373 243.405 43.1065 247.439C43.3476 247.802 43.56 248.178 43.7425 248.564ZM30.3305 255.518C30.4721 255.818 30.6358 256.11 30.8216 256.39C32.868 259.482 36.9253 260.256 39.8655 258.114C42.8056 255.972 43.5334 251.713 41.486 248.62C39.4396 245.527 35.3823 244.754 32.4421 246.896C31.0174 247.933 30.065 249.493 29.7586 251.286C29.5098 252.744 29.7133 254.214 30.3305 255.518Z"
                                    fill="white"
                                  />
                                  <path
                                    opacity="0.7"
                                    d="M54.6196 242.7C54.9359 243.368 55.2213 244.056 55.4757 244.762C55.5554 244.985 55.6317 245.209 55.7058 245.434C56.0664 246.544 56.3418 247.683 56.5288 248.832C56.531 248.847 56.5343 248.863 56.5365 248.878C56.5432 248.923 56.5509 248.967 56.5575 249.012C56.5708 249.099 56.5841 249.186 56.5963 249.272C56.6283 249.5 56.5144 249.716 56.3286 249.813C56.2832 249.836 56.2334 249.853 56.1804 249.862C55.9105 249.904 55.6594 249.707 55.6184 249.424C55.4105 247.965 55.0521 246.519 54.551 245.126C52.0688 238.21 46.4441 233.478 40.0229 232.047C36.4523 231.252 32.635 231.479 28.9759 232.92C28.3343 233.172 27.7094 233.458 27.1032 233.773C23.0271 235.895 19.7993 239.395 17.899 243.808C15.7155 248.876 15.544 254.539 17.4156 259.752C21.2827 270.519 32.7534 275.99 42.9907 271.957C43.6223 271.708 44.2384 271.427 44.8391 271.115C47.4396 269.762 49.7271 267.826 51.5323 265.436C51.5788 265.374 51.6363 265.327 51.6994 265.295C51.8653 265.208 52.071 265.224 52.2259 265.353C52.4394 265.533 52.477 265.858 52.3066 266.082C50.4118 268.591 48.0093 270.624 45.2804 272.044C44.651 272.372 44.0028 272.667 43.3403 272.928C32.5919 277.162 20.5471 271.411 16.4909 260.115C14.5253 254.641 14.7067 248.697 16.9986 243.376C18.9941 238.744 22.3822 235.068 26.6618 232.842C27.2979 232.511 27.9538 232.212 28.6275 231.947C33.8341 229.896 39.4942 230.099 44.5659 232.52C48.9805 234.63 52.4892 238.199 54.6196 242.7Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M112.331 302.649C112.398 302.492 112.364 302.306 112.244 302.187L108.825 298.788C109.25 296.526 109.333 294.175 109.039 291.821L112.655 288.677C112.782 288.567 112.827 288.384 112.77 288.223L110.778 282.676C110.719 282.513 110.57 282.408 110.405 282.412L105.707 282.543C104.448 280.568 102.906 278.858 101.164 277.45L101.599 272.533C101.614 272.361 101.524 272.197 101.373 272.125L96.233 269.672C96.0826 269.6 95.9056 269.636 95.7928 269.761L92.565 273.345C90.4103 272.894 88.1726 272.801 85.9315 273.104L82.9294 269.299C82.8244 269.165 82.6496 269.116 82.4958 269.177L77.2184 271.256C77.0647 271.317 76.964 271.474 76.9684 271.646L77.1034 276.581C75.2263 277.898 73.6025 279.513 72.2651 281.339L67.5828 280.871C67.4191 280.855 67.2632 280.95 67.1957 281.107L64.8728 286.499C64.8053 286.657 64.8396 286.842 64.9591 286.962L68.3793 290.361C67.9545 292.623 67.8715 294.974 68.1658 297.327L64.5498 300.471C64.4226 300.582 64.3772 300.764 64.4348 300.926L66.4269 306.473C66.4855 306.636 66.6349 306.741 66.7997 306.736L71.4975 306.606C72.7563 308.58 74.2982 310.29 76.0404 311.698L75.6057 316.615C75.5902 316.788 75.6809 316.952 75.8313 317.023L80.9716 319.477C81.122 319.549 81.299 319.512 81.4118 319.387L84.6395 315.803C86.7943 316.255 89.032 316.348 91.2731 316.045L94.2751 319.85C94.3802 319.983 94.555 320.032 94.7088 319.971L99.9861 317.893C100.14 317.832 100.241 317.675 100.236 317.502L100.101 312.568C101.978 311.25 103.602 309.636 104.939 307.809L109.622 308.277C109.785 308.294 109.941 308.199 110.01 308.042L112.331 302.649Z"
                                    fill="#FFBB38"
                                  />
                                  <path
                                    opacity="0.7"
                                    d="M93.7754 291.899C94.324 293.058 94.5043 294.364 94.2831 295.659C94.011 297.252 93.1648 298.637 91.8994 299.56C89.2889 301.462 85.6851 300.775 83.8655 298.029C82.0492 295.273 82.693 291.496 85.3046 289.593C86.57 288.671 88.102 288.322 89.6196 288.612C91.1373 288.901 92.458 289.794 93.3396 291.125C93.5033 291.373 93.6493 291.633 93.7754 291.899ZM84.7991 296.551C84.8909 296.745 84.996 296.933 85.1165 297.115C86.455 299.136 89.1053 299.641 91.0266 298.241C91.9569 297.563 92.5808 296.544 92.7799 295.373C92.9801 294.2 92.7323 293.017 92.0852 292.037C91.437 291.058 90.4658 290.401 89.3497 290.188C88.2325 289.976 87.1054 290.232 86.1751 290.911C84.4285 292.184 83.8776 294.603 84.7991 296.551Z"
                                    fill="white"
                                  />
                                  <path
                                    opacity="0.7"
                                    d="M101.353 287.827C101.568 288.282 101.763 288.751 101.937 289.236C102.283 290.198 102.535 291.198 102.689 292.21C102.695 292.255 102.702 292.301 102.709 292.347C102.76 292.7 102.583 293.032 102.295 293.182C102.225 293.219 102.148 293.244 102.067 293.256C101.65 293.321 101.264 293.017 101.2 292.581C101.065 291.634 100.833 290.698 100.51 289.799C100.492 289.749 100.473 289.7 100.456 289.651C99.6724 287.531 98.4147 285.694 96.8052 284.26C95.9314 283.481 94.9525 282.822 93.8872 282.301C93.8784 282.297 93.8695 282.292 93.8618 282.288C93.8352 282.276 93.8087 282.262 93.7822 282.25C90.6551 280.758 87.1641 280.632 83.9541 281.897C83.5382 282.061 83.1344 282.245 82.7418 282.449C80.1025 283.823 78.0141 286.09 76.783 288.946C75.3693 292.227 75.2587 295.892 76.471 299.267C77.6834 302.64 80.0726 305.323 83.1986 306.815C86.3257 308.308 89.8166 308.434 93.0267 307.168C93.4348 307.008 93.8341 306.825 94.2224 306.623C95.9059 305.747 97.3871 304.494 98.5552 302.946C98.6271 302.851 98.7155 302.777 98.8129 302.727C99.0695 302.594 99.387 302.619 99.627 302.818C99.9566 303.094 100.013 303.598 99.7509 303.944C98.4434 305.674 96.7864 307.078 94.9038 308.058C94.4691 308.284 94.0222 308.488 93.5653 308.668C89.9726 310.083 86.0679 309.943 82.5692 308.273C79.0716 306.603 76.3958 303.608 75.0419 299.829C73.6858 296.053 73.8097 291.952 75.3925 288.281C76.7686 285.085 79.107 282.549 82.0593 281.013C82.4973 280.785 82.9497 280.578 83.4143 280.395C90.3675 277.658 98.1083 280.975 101.353 287.827Z"
                                    fill="white"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_116_1151"
                                      x1="122.138"
                                      y1="-175.122"
                                      x2="133.587"
                                      y2="-58.3452"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopcolor="#4F52FF" />
                                      <stop offset="{1}" stopcolor="#4042E2" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint1_linear_116_1151"
                                      x1="97.4392"
                                      y1="75.3893"
                                      x2="171.441"
                                      y2="75.3893"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopcolor="#4F52FF" />
                                      <stop offset="{1}" stopcolor="#4042E2" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint2_linear_116_1151"
                                      x1="231.298"
                                      y1="308.783"
                                      x2="189.861"
                                      y2="202.11"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopcolor="#FEBBBA" />
                                      <stop offset="{1}" stopcolor="#FF928E" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint3_linear_116_1151"
                                      x1="231.927"
                                      y1="651.901"
                                      x2="94.973"
                                      y2="-948.754"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopcolor="#FEBBBA" />
                                      <stop offset="{1}" stopcolor="#FF928E" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint4_linear_116_1151"
                                      x1="227.004"
                                      y1="140.026"
                                      x2="209.44"
                                      y2="140.026"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopcolor="#FEBBBA" />
                                      <stop offset="{1}" stopcolor="#FF928E" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint5_linear_116_1151"
                                      x1="196.614"
                                      y1="311.808"
                                      x2="154.833"
                                      y2="247.705"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopcolor="#4F52FF" />
                                      <stop offset="{1}" stopcolor="#4042E2" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint6_linear_116_1151"
                                      x1="234.261"
                                      y1="331.33"
                                      x2="187.9"
                                      y2="251.2"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopcolor="#4F52FF" />
                                      <stop offset="{1}" stopcolor="#4042E2" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint7_linear_116_1151"
                                      x1="241.231"
                                      y1="136.281"
                                      x2="204.599"
                                      y2="185.888"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopcolor="#4F52FF" />
                                      <stop offset="{1}" stopcolor="#4042E2" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint8_linear_116_1151"
                                      x1="207.822"
                                      y1="100.838"
                                      x2="195.348"
                                      y2="100.838"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopcolor="#FEBBBA" />
                                      <stop offset="{1}" stopcolor="#FF928E" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint9_linear_116_1151"
                                      x1="352.785"
                                      y1="83.3682"
                                      x2="301.653"
                                      y2="100.158"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopcolor="#FF928E" />
                                      <stop offset="{1}" stopcolor="#FE7062" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint10_linear_116_1151"
                                      x1="134.633"
                                      y1="107.95"
                                      x2="242.521"
                                      y2="169.757"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopcolor="#FEBBBA" />
                                      <stop offset="{1}" stopcolor="#FF928E" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint11_linear_116_1151"
                                      x1="123.913"
                                      y1="126.662"
                                      x2="231.802"
                                      y2="188.469"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopcolor="#FEBBBA" />
                                      <stop offset="{1}" stopcolor="#FF928E" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint12_linear_116_1151"
                                      x1="187.045"
                                      y1="100.832"
                                      x2="211.287"
                                      y2="65.385"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopcolor="#FEBBBA" />
                                      <stop offset="{1}" stopcolor="#FF928E" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint13_linear_116_1151"
                                      x1="199.885"
                                      y1="75.5063"
                                      x2="234.226"
                                      y2="120.15"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopcolor="#09005D" />
                                      <stop offset="{1}" stopcolor="#1A0F91" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
