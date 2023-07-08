export function MainPage() {
  const card_dummy_list = [
    {
      title: 'lack',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      penname: 'Summers',
    },
    {
      title: 'bend',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      penname: 'Jensen',
    },
    {
      title: 'current',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      penname: 'Pierce',
    },
    {
      title: 'trunk',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      penname: 'Cunningham',
    },
    {
      title: 'same',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      penname: 'Springs',
    },
  ]
  return (
    <div className="w-full h-full relative bg-[#F7F7F7]">
      <div className="pt-9 pl-6">로고영역</div>
      <div className="w-full pt-9 px-6 flex flex-col">
        <div className="font-bold text-2xl">일상공감</div>
        <div className="mt-3 flex items-center relative">
          <input
            className="w-full pl-5 py-1 border rounded-[20px] border-[#D9D9D9]"
            placeholder="검색"
          />
          <svg
            className="absolute right-5"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 18.4444L13 11.4444C13.4444 10.8889 13.7963 10.25 14.0556 9.52778C14.3148 8.80556 14.4444 8.03704 14.4444 7.22222C14.4444 5.2037 13.7452 3.49556 12.3467 2.09778C10.9481 0.700001 9.24 0.000741145 7.22222 3.15693e-07C5.2037 2.27461e-07 3.49556 0.699259 2.09778 2.09778C0.7 3.4963 0.000740513 5.20444 -3.15693e-07 7.22222C-4.03926e-07 9.24074 0.699259 10.9489 2.09778 12.3467C3.4963 13.7444 5.20444 14.4437 7.22222 14.4444C8.03704 14.4444 8.80556 14.3148 9.52778 14.0556C10.25 13.7963 10.8889 13.4444 11.4444 13L18.4444 20L20 18.4444ZM12.2222 7.22222C12.2222 8.61111 11.7359 9.79185 10.7633 10.7644C9.79074 11.737 8.61037 12.223 7.22222 12.2222C5.83333 12.2222 4.65259 11.7359 3.68 10.7633C2.70741 9.79074 2.22148 8.61037 2.22222 7.22222C2.22222 5.83333 2.70852 4.65259 3.68111 3.68C4.6537 2.70741 5.83407 2.22148 7.22222 2.22222C8.61111 2.22222 9.79185 2.70852 10.7644 3.68111C11.737 4.6537 12.223 5.83407 12.2222 7.22222Z"
              fill="#D0D0D0"
            />
          </svg>
        </div>
        <div className="mt-4 overflow-auto whitespace-nowrap scrollbar-hide">
          <button className="mr-2 px-4 py-2 border rounded-full bg-[#FFCE52]">
            #자전거
          </button>
          <button className="mr-2 px-4 py-2 border rounded-full">#밤</button>
          <button className="mr-2 px-4 py-2 border rounded-full">#글귀</button>
          <button className="mr-2 px-4 py-2 border rounded-full">#회사</button>
          <button className="mr-2 px-4 py-2 border rounded-full">#개발</button>
          <button className="mr-2 px-4 py-2 border rounded-full">#곰발</button>
          <button className="mr-2 px-4 py-2 border rounded-full">#새발</button>
        </div>
        {card_dummy_list.map((data) => (
          <div
            key={data.penname}
            className="mt-4 px-5 py-5 h-44 border rounded-[20px] bg-white"
          >
            <div className="font-bold text-base">{data.title}</div>
            <div className="mt-4 text-xs line-clamp-5">{data.content}</div>
            <div className="mt-2 text-xs text-right">{data.penname}님의 글</div>
          </div>
        ))}
      </div>

      {/* footer */}
      <div className="w-full h-16 mt-7 fixed bottom-0 z-50 flex justify-around items-center bg-white">
        <svg
          className="w-8 h-8"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 10C8.625 10 7.44792 9.51042 6.46875 8.53125C5.48958 7.55208 5 6.375 5 5C5 3.625 5.48958 2.44792 6.46875 1.46875C7.44792 0.489584 8.625 0 10 0C11.375 0 12.5521 0.489584 13.5312 1.46875C14.5104 2.44792 15 3.625 15 5C15 6.375 14.5104 7.55208 13.5312 8.53125C12.5521 9.51042 11.375 10 10 10ZM0 20V16.5C0 15.7917 0.1825 15.1404 0.5475 14.5463C0.9125 13.9521 1.39667 13.4992 2 13.1875C3.29167 12.5417 4.60417 12.0571 5.9375 11.7338C7.27083 11.4104 8.625 11.2492 10 11.25C11.375 11.25 12.7292 11.4117 14.0625 11.735C15.3958 12.0583 16.7083 12.5425 18 13.1875C18.6042 13.5 19.0887 13.9533 19.4537 14.5475C19.8187 15.1417 20.0008 15.7925 20 16.5V20H0Z"
            fill="black"
          />
        </svg>
        <svg
          className="w-8 h-8"
          width="29"
          height="33"
          viewBox="0 0 29 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.3888 9.92761L17.7222 1.25898C16.8361 0.448226 15.6889 0 14.5 0C13.3112 0 12.164 0.448226 11.2779 1.25898L1.61125 9.92761C1.09952 10.3958 0.691153 10.9701 0.413354 11.6123C0.135556 12.2545 -0.00530464 12.9499 0.000152723 13.6522V28.0559C0.000152723 29.3672 0.509374 30.6247 1.41579 31.5519C2.32221 32.4791 3.55158 33 4.83345 33H24.1666C25.4485 33 26.6779 32.4791 27.5843 31.5519C28.4907 30.6247 28.9999 29.3672 28.9999 28.0559V13.6357C29.0031 12.9362 28.8611 12.244 28.5834 11.6048C28.3057 10.9656 27.8985 10.3939 27.3888 9.92761ZM17.7222 29.7039H11.2779V21.4638C11.2779 21.0267 11.4476 20.6075 11.7497 20.2985C12.0519 19.9894 12.4617 19.8158 12.8889 19.8158H16.1111C16.5384 19.8158 16.9482 19.9894 17.2504 20.2985C17.5525 20.6075 17.7222 21.0267 17.7222 21.4638V29.7039ZM25.7777 28.0559C25.7777 28.493 25.608 28.9122 25.3059 29.2212C25.0037 29.5303 24.5939 29.7039 24.1666 29.7039H20.9444V21.4638C20.9444 20.1526 20.4352 18.895 19.5288 17.9678C18.6224 17.0406 17.393 16.5197 16.1111 16.5197H12.8889C11.6071 16.5197 10.3777 17.0406 9.47129 17.9678C8.56487 18.895 8.05565 20.1526 8.05565 21.4638V29.7039H4.83345C4.40616 29.7039 3.99637 29.5303 3.69423 29.2212C3.39209 28.9122 3.22235 28.493 3.22235 28.0559V13.6357C3.22264 13.4017 3.27164 13.1704 3.36609 12.9573C3.46054 12.7442 3.59827 12.5541 3.77013 12.3997L13.4367 3.7475C13.7307 3.48329 14.1087 3.33758 14.5 3.33758C14.8914 3.33758 15.2694 3.48329 15.5634 3.7475L25.23 12.3997C25.4018 12.5541 25.5396 12.7442 25.634 12.9573C25.7285 13.1704 25.7775 13.4017 25.7777 13.6357V28.0559Z"
            fill="#9F9F9F"
          />
        </svg>
        <svg
          className="w-8 h-8"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 8.3834C32.0012 8.17285 31.9608 7.96412 31.8812 7.7692C31.8016 7.57427 31.6843 7.39698 31.536 7.24749L24.752 0.463992C24.6025 0.315713 24.4252 0.198401 24.2302 0.118784C24.0353 0.0391665 23.8266 -0.0011906 23.616 2.67409e-05C23.4054 -0.0011906 23.1967 0.0391665 23.0017 0.118784C22.8068 0.198401 22.6295 0.315713 22.48 0.463992L17.952 4.99165L0.464026 22.4783C0.315736 22.6278 0.198416 22.8051 0.118793 23.0001C0.0391693 23.195 -0.00119068 23.4037 2.67428e-05 23.6143V30.3978C2.67428e-05 30.8221 0.168597 31.229 0.468655 31.529C0.768713 31.8291 1.17568 31.9976 1.60002 31.9976H8.38401C8.6079 32.0098 8.83184 31.9748 9.04132 31.8949C9.25081 31.8149 9.44115 31.6919 9.60001 31.5337L26.992 14.047L31.536 9.59931C31.682 9.44425 31.801 9.26579 31.888 9.07135C31.9034 8.94382 31.9034 8.8149 31.888 8.68738C31.8955 8.6129 31.8955 8.53787 31.888 8.46339L32 8.3834ZM7.72801 28.7979H3.20002V24.2702L19.088 8.3834L23.616 12.9111L7.72801 28.7979ZM25.872 10.6552L21.344 6.12757L23.616 3.87174L28.128 8.3834L25.872 10.6552Z"
            fill="#9F9F9F"
          />
        </svg>
      </div>
    </div>
  )
}
