import React from "react";

const FastFood = () => {
  return (
    <div>
      <div className="services__content">
        {SVGPath()}
        <h3 className="services__title">Fast food</h3>
        <p className="services__description">
          We offer our clients excellent quality services for many years, with
          the best and delicious food in the city.
        </p>
      </div>
    </div>
  );
};
function SVGPath() {
  return (
    <svg className="services__img" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          d="M55.82 22.0395C55.5475 21.5164 54.9027 21.3132 54.3795 21.5855L54.3794 
                            21.5857L49.4885 24.1283H49.481L32.1524 33.1455L38.0258 14.5397C38.0258 14.5323 
                            38.0343 14.5269 38.0364 14.5184L39.6917 9.24302C39.8672 8.68077 39.5542 8.08249 
                            38.9922 7.90602C23.9044 3.04166 7.72977 11.3293 2.86527 26.4172C-1.99923 41.5051 
                            6.28852 57.6796 21.3763 62.5441C21.4918 62.5813 21.6074 62.6178 21.7234 62.6535C24.5311 
                            63.5434 27.4587 63.9975 30.4042 64.0002C42.9131 63.965 53.9649 55.8488 57.7422 
                            43.9239C60.0541 36.6656 59.3619 28.7836 55.82 22.0395ZM29.3406 34.962C29.164 
                            35.5247 29.4769 36.1241 30.0396 36.3008C30.3091 36.3854 30.601 36.3598 30.8517 
                            36.2296L49.4682 26.5439C49.5504 26.7222 49.638 26.8984 49.7149 27.0778C49.8216 
                            27.3362 49.9284 27.5957 50.0352 27.8584C50.173 28.2183 50.2969 28.5814 50.4133 
                            28.9466C50.5019 29.2243 50.5884 29.503 50.6653 29.7828C50.7625 30.1405 50.8457 
                            30.5015 50.9237 30.8635C50.9867 31.1539 51.0508 31.4433 51.101 31.7349C51.1629 
                            32.0969 51.2078 32.46 51.2505 32.8241C51.2857 33.1178 51.3242 33.4104 51.3466 
                            33.7051C51.3744 34.0778 51.3808 34.4526 51.3882 34.8253C51.3946 35.1126 51.4085 
                            35.3988 51.4021 35.686C51.3946 36.0822 51.3605 36.4784 51.3306 36.8746C51.3092 
                            37.1394 51.2996 37.4086 51.2697 37.6691C51.2163 38.1219 51.1341 38.5725 51.0561 
                            39.0232C51.0187 39.2304 50.9953 39.4386 50.9493 39.6447C50.8084 40.3036 50.6386 
                            40.9603 50.4325 41.6118C48.7654 46.9422 45.0355 51.3845 40.074 53.9491C39.6361 
                            54.1776 39.1865 54.3687 38.738 54.5642C28.0956 59.2052 15.7058 54.3402 11.0648 
                            43.6977C7.01535 34.4119 10.1643 23.5587 18.5549 17.8822C19.2289 17.4217 19.9288 
                            17.0002 20.6512 16.62C21.2172 16.3252 21.7949 16.0658 22.3769 15.8255C22.4784 
                            15.7828 22.5798 15.74 22.6823 15.6995C23.2519 15.4767 23.8243 15.2783 24.3995 
                            15.1047C24.4977 15.0748 24.5981 15.0502 24.6974 15.0224C25.2613 14.8633 25.8283 
                            14.7245 26.4007 14.6145C26.4456 14.6059 26.4904 14.5942 26.5363 14.5857C27.1344 
                            14.4789 27.7377 14.3956 28.3432 14.3368L28.6956 14.3048C29.2936 14.2578 29.8938 
                            14.2322 30.495 14.2375C30.5879 14.2375 30.6797 14.2439 30.7716 14.2461C31.3109 
                            14.2567 31.8512 14.2909 32.3905 14.3443C32.5144 14.3561 32.6372 14.3657 32.7611 
                            14.3796C33.3569 14.4507 33.9522 14.5461 34.5466 14.6657C34.6715 14.6914 34.7965 14.7234 34.9214 
                            14.7512C35.1681 14.8067 35.4137 14.8804 35.6604 14.9445L29.3406 34.962ZM55.6993 43.2777C51.2801 
                            57.2726 36.3525 65.0352 22.3577 60.616C15.642 58.4955 10.0427 53.7957 6.79003 47.5492C-0.00601205
                            34.5574 5.01667 18.5164 18.0083 11.7204C23.9533 8.61056 30.8553 7.86704 37.3263 9.6392L36.3097 
                            12.8824C36.0897 12.8236 35.8675 12.7895 35.6465 12.7382C35.3261 12.6613 34.9983 12.5887 34.6726 
                            12.5246C34.2743 12.4488 33.877 12.3879 33.4776 12.3335C33.1412 12.2865 32.8059 12.2406 32.4695 
                            12.2096C32.0733 12.1722 31.6793 12.1541 31.2842 12.137C30.9457 12.1231 30.6082 12.1071 30.2707 
                            12.1071C29.8724 12.1071 29.4762 12.1306 29.079 12.153C28.7458 12.1712 28.4148 12.1829 28.0837 
                            12.216C27.6779 12.2555 27.2743 12.3228 26.8717 12.3826C26.5513 12.4307 26.2309 12.4702 25.917 
                            12.5321C25.4984 12.6154 25.084 12.7254 24.6686 12.8311C24.3728 12.9069 24.0749 12.9699 23.7812 
                            13.0575C23.338 13.1899 22.9013 13.3533 22.4634 13.5135C22.205 13.6075 21.9434 13.6854 21.6881 
                            13.7901C21.1542 14.0037 20.6363 14.2557 20.1173 14.512C19.9667 14.5867 19.8108 14.6444 19.6613 
                            14.7256C19.0408 15.0459 18.446 15.4037 17.864 15.7742C7.77422 22.2215 4.26621 35.2991 9.77477 
                            45.9303C9.78332 45.9474 9.78972 45.9645 9.79827 45.9805C9.81963 46.0211 9.84632 46.0574 9.86661 
                            46.0979C12.6976 51.506 17.5617 55.5673 23.3882 57.3877C23.4202 57.3983 23.4523 57.4037 23.4833 
                            57.4133C24.1154 57.6098 24.7519 57.7732 25.3916 57.9141C25.6222 57.9654 25.854 58.0049 26.0857 
                            58.0497C26.5395 58.1352 26.9945 58.2099 27.4505 58.2633C27.7046 58.2954 27.9577 58.3263 28.2119 
                            58.3509C28.6871 58.3957 29.1623 58.4224 29.6375 58.4374C29.8511 58.4449 30.0646 58.4609 30.2697 
                            58.462C30.3081 58.462 30.3466 58.462 30.385 58.462C30.9681 58.462 31.5501 58.4321 32.1299 
                            58.3872C32.3061 58.3733 32.4813 58.3573 32.6564 58.3391C33.2843 58.2772 33.9101 58.196 34.5306 
                            58.0818C34.6373 58.0626 34.7441 58.0359 34.8509 58.0145C35.4148 57.9077 35.9743 57.7668 36.5307 
                            57.6119C36.677 57.5713 36.8233 57.534 36.9685 57.4902C37.5836 57.3065 38.1913 57.094 38.7936 
                            56.858C38.9281 56.8046 39.0605 56.7512 39.194 56.6935C39.8241 56.4319 40.4488 56.1521 41.0607 
                            55.8392C46.5215 53.0152 50.6262 48.1245 52.4604 42.2568C52.4924 42.1564 52.5106 42.0539 52.5405 
                            41.9535C52.7274 41.3352 52.8961 40.7158 53.0296 40.0911C53.0819 39.8455 53.1107 39.5988 53.1545 
                            39.3521C53.2421 38.8673 53.3318 38.3835 53.3884 37.8966C53.4204 37.6189 53.429 37.3413 53.4514 
                            37.0626C53.4866 36.6066 53.5251 36.1516 53.5336 35.6967C53.54 35.402 53.524 35.1083 53.5187 
                            34.8136C53.5101 34.3768 53.5027 33.9401 53.4685 33.5044C53.445 33.1979 53.4023 32.8935 53.367 
                            32.5881C53.3168 32.1684 53.2666 31.7509 53.1951 31.3344C53.1396 31.014 53.068 30.7044 52.9997 
                            30.3893C52.9121 29.991 52.8224 29.5938 52.7146 29.1986C52.6249 28.8783 52.5213 28.5515 
                            52.4177 28.229C52.297 27.8552 52.1721 27.4815 52.0322 27.1141C51.9051 26.7788 51.7652 
                            26.4467 51.6221 26.1156C51.5399 25.9266 51.4758 25.7333 51.3882 25.5454L54.4007 
                            23.9777C57.2654 30.0137 57.7296 36.9125 55.6993 43.2777Z"
        />
        <path
          d="M62.4099 14.2524C58.9465 7.45084 52.8892 2.33112 45.6056 0.0494396C45.0432 -0.127563 44.4439 
                            0.184527 44.2665 0.74677L42.5888 6.06592L35.8686 27.366C35.7386 27.7788 35.8706 28.2291 36.2029 
                            28.5065C36.5352 28.7839 37.002 28.8333 37.385 28.6315L57.0448 18.2729L61.9571 15.6833C62.4744 
                            15.4107 62.6762 14.7729 62.4099 14.2524ZM44.8965 10.6002C45.7812 10.6002 46.4984 11.3174 46.4984 
                            12.202C46.4984 13.0866 45.7812 13.8038 44.8965 13.8038C44.0119 13.8038 43.2947 13.0866 43.2947 
                            12.202C43.2947 11.3174 44.0119 10.6002 44.8965 10.6002ZM38.6878 25.5314L40.1167 21.0003C40.1946 
                            22.1759 40.8244 23.2453 41.8146 23.8836L38.6878 25.5314ZM43.8287 22.3469C42.944 22.3469 42.2268 
                            21.6297 42.2268 20.7451C42.2268 19.8605 42.944 19.1433 43.8287 19.1433C44.7133 19.1433 45.4305 
                            19.8605 45.4305 20.7451C45.4305 21.6299 44.7133 22.3469 43.8287 22.3469ZM47.5673 20.8583C47.5673 
                            20.8188 47.5791 20.7825 47.5791 20.743C47.5884 18.6876 45.9297 17.0139 43.8744 17.0046C42.7351 16.9994 
                            41.6562 17.5164 40.9464 18.4075L42.1136 14.672C43.4742 16.2298 45.84 16.3897 47.3979 15.0292C48.9557 
                            13.6686 49.1156 11.3028 47.7551 9.74493C46.8342 8.69052 45.4021 8.23774 44.0424 8.57119L44.2944 
                            7.77561C44.4759 7.84289 44.6607 7.90482 44.8401 7.97744C45.0857 8.07675 45.3302 8.17714 45.5705 
                            8.28499C45.9379 8.44945 46.2967 8.62778 46.6523 8.81253C46.8744 8.92786 47.0997 9.03999 47.3176 
                            9.16386C47.6956 9.37744 48.0651 9.61024 48.425 9.84731C48.6022 9.96264 48.7849 10.0694 48.9589 
                            10.1912C49.4722 10.5472 49.9706 10.9269 50.454 11.3306L50.4945 11.3616C50.9858 11.777 51.4556 12.2159 
                            51.9052 12.6804C52.0494 12.8278 52.1829 12.988 52.3238 13.1396C52.6218 13.46 52.9154 13.79 53.1942 
                            14.1327C53.3501 14.325 53.4964 14.5257 53.6459 14.7244C53.8904 15.0447 54.1286 15.3758 54.355 15.7143C54.5002 
                            15.9279 54.6401 16.1553 54.7821 16.3796C54.8889 16.5494 54.9818 16.7266 55.0822 16.8996L47.5673 20.8583ZM56.9829 
                            15.8937C56.8654 15.6876 56.7287 15.4964 56.6049 15.2946C56.45 15.0415 56.2941 14.7884 56.1297 14.5471C55.883 
                            14.1765 55.6213 13.8188 55.3544 13.4653C55.1867 13.2421 55.0233 13.0147 54.8471 12.799C54.5428 12.4231 54.2203 
                            12.0664 53.8946 11.7118C53.7355 11.5399 53.5859 11.3594 53.4215 11.1918C52.9271 10.6877 52.4145 10.204 51.8763 
                            9.748L51.8602 9.73305C51.3167 9.27386 50.7486 8.8435 50.1634 8.43663C49.9722 8.30421 49.7704 8.18781 49.576 
                            8.06074C49.1724 7.79697 48.7655 7.53854 48.3448 7.3004C48.1034 7.16478 47.8546 7.04304 47.6079 6.91489C47.2139 
                            6.71093 46.8177 6.51337 46.4108 6.33076C46.1428 6.21222 45.8715 6.10223 45.5981 5.9933C45.3771 5.90467 45.1646 
                            5.80108 44.9403 5.71886L45.9783 2.42229C51.9362 4.55766 56.9208 8.77582 60.0125 14.2983L56.9829 15.8937Z"
        />
        <path
          d="M25.6746 17.0076C23.6103 17.0076 21.937 18.6809 21.937 20.7452C21.937 22.8094 23.6103 24.4828 25.6746 
                            24.4828C27.7388 24.4828 29.4122 22.8094 29.4122 20.7452C29.4122 18.6809 27.7388 17.0076 25.6746 17.0076ZM25.6746 
                            22.347C24.7899 22.347 24.0727 21.6298 24.0727 20.7452C24.0727 19.8606 24.7899 19.1433 25.6746 19.1433C26.5592 
                            19.1433 27.2764 19.8606 27.2764 20.7452C27.2764 21.6299 26.5592 22.347 25.6746 22.347Z"
        />
        <path
          d="M14.9957 26.6185C12.9315 26.6185 11.2581 28.2919 11.2581 30.3561C11.2581 32.4204 12.9315 34.0938 14.9957 
                            34.0938C17.0599 34.0938 18.7333 32.4204 18.7333 30.3561C18.7333 28.2919 17.0599 26.6185 14.9957 26.6185ZM14.9957 
                            31.958C14.1111 31.958 13.3938 31.2408 13.3938 30.3561C13.3938 29.4715 14.1111 28.7543 14.9957 28.7543C15.8803 
                            28.7543 16.5975 29.4715 16.5975 30.3561C16.5975 31.2409 15.8803 31.958 14.9957 31.958Z"
        />
        <path
          d="M25.6746 26.6185C23.6103 26.6185 21.937 28.2919 21.937 30.3561C21.937 32.4204 23.6103 34.0938 
                            25.6746 34.0938C27.7388 34.0938 29.4122 32.4204 29.4122 30.3561C29.4122 28.2919 27.7388 26.6185 25.6746 
                            26.6185ZM25.6746 31.958C24.7899 31.958 24.0727 31.2408 24.0727 30.3561C24.0727 29.4715 24.7899 28.7543 
                            25.6746 28.7543C26.5592 28.7543 27.2764 29.4715 27.2764 30.3561C27.2764 31.2409 26.5592 31.958 25.6746 31.958Z"
        />
        <path
          d="M36.3534 45.8406C34.2892 45.8406 32.6158 47.514 32.6158 49.5782C32.6158 51.6424 34.2892 53.3158 
                            36.3534 53.3158C38.4177 53.3158 40.0911 51.6424 40.0911 49.5782C40.0911 47.514 38.4177 45.8406 36.3534 
                            45.8406ZM36.3534 51.18C35.4688 51.18 34.7516 50.4628 34.7516 49.5782C34.7516 48.6936 35.4688 47.9764 
                            36.3534 47.9764C37.2381 47.9764 37.9553 48.6936 37.9553 49.5782C37.9553 50.4629 37.2381 51.18 36.3534 51.18Z"
        />
        <path
          d="M43.8287 38.3654C41.7644 38.3654 40.091 40.0387 40.091 42.103C40.091 44.1672 41.7644 45.8406 43.8287 
                            45.8406C45.8929 45.8406 47.5663 44.1672 47.5663 42.103C47.5663 40.0387 45.8929 38.3654 43.8287 38.3654ZM43.8287 
                            43.7048C42.944 43.7048 42.2268 42.9876 42.2268 42.103C42.2268 41.2184 42.944 40.5011 43.8287 40.5011C44.7133 
                            40.5011 45.4305 41.2184 45.4305 42.103C45.4305 42.9877 44.7133 43.7048 43.8287 43.7048Z"
        />
        <path
          d="M47.0323 29.8223C44.9681 29.8223 43.2947 31.4956 43.2947 33.5599C43.2947 35.6241 44.9681 37.2975 47.0323 
                            37.2975C49.0966 37.2975 50.7699 35.6241 50.7699 33.5599C50.7699 31.4956 49.0966 29.8223 47.0323 29.8223ZM47.0323 
                            35.1617C46.1477 35.1617 45.4305 34.4445 45.4305 33.5599C45.4305 32.6753 46.1477 31.958 47.0323 31.958C47.9169 
                            31.958 48.6342 32.6753 48.6342 33.5599C48.6342 34.4446 47.9169 35.1617 47.0323 35.1617Z"
        />
        <path
          d="M16.0636 37.2975C13.9993 37.2975 12.326 38.9709 12.326 41.0351C12.326 43.0993 13.9993 44.7727 16.0636 
                            44.7727C18.1278 44.7727 19.8012 43.0993 19.8012 41.0351C19.8012 38.9709 18.1278 37.2975 16.0636 37.2975ZM16.0636 
                            42.6369C15.179 42.6369 14.4617 41.9197 14.4617 41.0351C14.4617 40.1505 15.179 39.4333 16.0636 39.4333C16.9482 
                            39.4333 17.6654 40.1505 17.6654 41.0351C17.6654 41.9198 16.9482 42.6369 16.0636 42.6369Z"
        />
        <path
          d="M33.1498 36.2296C31.0856 36.2296 29.4122 37.903 29.4122 39.9672C29.4122 42.0314 31.0856 43.7048 33.1498 
                            43.7048C35.214 43.7048 36.8874 42.0314 36.8874 39.9672C36.8874 37.903 35.214 36.2296 33.1498 36.2296ZM33.1498 
                            41.5691C32.2652 41.5691 31.5479 40.8518 31.5479 39.9672C31.5479 39.0826 32.2652 38.3654 33.1498 38.3654C34.0344 
                            38.3654 34.7516 39.0826 34.7516 39.9672C34.7516 40.852 34.0344 41.5691 33.1498 41.5691Z"
        />
        <path
          d="M23.5388 45.8406C21.4746 45.8406 19.8012 47.514 19.8012 49.5782C19.8012 51.6424 21.4746 53.3158 23.5388 
                            53.3158C25.603 53.3158 27.2764 51.6424 27.2764 49.5782C27.2764 47.514 25.603 45.8406 23.5388 45.8406ZM23.5388 
                            51.18C22.6542 51.18 21.937 50.4628 21.937 49.5782C21.937 48.6936 22.6542 47.9764 23.5388 47.9764C24.4234 
                            47.9764 25.1406 48.6936 25.1406 49.5782C25.1406 50.4629 24.4234 51.18 23.5388 51.18Z"
        />
        <path
          d="M17.6654 22.347C17.0757 22.347 16.5975 22.8252 16.5975 23.4149C16.5975 24.0047 17.0757 24.4828 17.6654 
                            24.4828C18.2551 24.4828 18.7333 24.961 18.7333 25.5507C18.7333 26.1405 19.2114 26.6186 19.8012 26.6186C20.3909 
                            26.6186 20.8691 26.1405 20.8691 25.5507C20.8691 23.7815 19.4348 22.347 17.6654 22.347Z"
        />
        <path
          d="M31.5479 44.7727C29.7786 44.7727 28.3443 46.207 28.3443 47.9764C28.3443 48.5661 28.8224 49.0443 29.4122 
                            49.0443C30.0019 49.0443 30.4801 48.5661 30.4801 47.9764C30.4801 47.3866 30.9582 46.9085 31.5479 46.9085C32.1377 
                            46.9085 32.6158 46.4303 32.6158 45.8406C32.6158 45.2509 32.1377 44.7727 31.5479 44.7727Z"
        />
        <path
          d="M33.8135 16.252C33.3962 15.835 32.72 15.8353 32.303 16.2526C31.8806 16.6564 31.2153 16.6564 30.793 
                            16.2526C30.3759 15.8353 29.6997 15.835 29.2824 16.252C28.8651 16.6691 28.8649 17.3453 29.2819 17.7626C30.5327 
                            19.0141 32.561 19.0147 33.8126 17.764C33.8131 17.7635 33.8135 17.7631 33.814 17.7626C34.231 17.3453 34.2308 
                            16.6691 33.8135 16.252Z"
        />
        <path
          d="M41.1589 34.0938C39.3896 34.0938 37.9553 35.528 37.9553 37.2974C37.9553 37.8871 38.4334 38.3653 39.0232 
                            38.3653C39.6129 38.3653 40.0911 37.8871 40.0911 37.2974C40.0911 36.7077 40.5692 36.2295 41.1589 36.2295C41.7487 
                            36.2295 42.2268 35.7514 42.2268 35.1616C42.2268 34.5719 41.7487 34.0938 41.1589 34.0938Z"
        />
        <path
          d="M24.8292 36.0997C24.8287 36.0992 24.8283 36.0988 24.8277 36.0982C24.4105 35.6812 23.7342 35.6815 23.3172 
                            36.0988C22.9002 36.516 22.9005 37.1923 23.3177 37.6093C23.7346 38.0263 23.7346 38.7023 23.3177 39.1193C22.9002 
                            39.5358 22.8993 40.212 23.3159 40.6295C23.3161 40.6298 23.3164 40.6301 23.3167 40.6303C23.7334 41.0476 24.4097 
                            41.048 24.8269 40.6311C24.8272 40.6309 24.8275 40.6306 24.8277 40.6303C26.0793 39.3797 26.0798 37.3513 24.8292 
                            36.0997Z"
        />
        <path
          d="M50.7699 13.804C50.1802 13.804 49.702 14.2821 49.702 14.8718C49.702 15.4616 49.2239 15.9397 48.6342 
                            15.9397C48.0444 15.9397 47.5663 16.4179 47.5663 17.0076C47.5663 17.5974 48.0444 18.0755 48.6342 18.0755C50.4035 
                            18.0755 51.8378 16.6412 51.8378 14.8718C51.8378 14.2821 51.3597 13.804 50.7699 13.804Z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="64" height="64" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default FastFood;
