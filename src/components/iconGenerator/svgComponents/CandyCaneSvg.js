import React from "react";
import styles from "./svgComponents.module.scss";

const CandyCaneSvg = props => (
  <svg className={styles.svg} viewBox="0 0 312 312" {...props}>
    <image
      width={312}
      height={312}
      imageRendering="optimizeQuality"
      preserveAspectRatio="none"
      xlinkHref="data:image/png;base64,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 KOuIaVVonQ/7U2rDerp+kVHqOiv+qpg1o9pcpzZMiP0p5nQSrQodV7jm3Zzb4bGyjrgU3Q6tU2KL Snnanq5fZJT6ooJ/K2a1TvXXqS+aE1t0zOkidDs8vsg1r+foDo+Vdsp0O7ROiS0q5Wl7un6RUeqL Cv6tmNU61V+nvmhObNExp4vQ7fD4Ite8nqM7PFbaKdOt0D0ltqi0p+tXf53Np2a1TpFR/j3MrNii 0p6OboVuh8cXueb1HF2hw2mnXIpuh+4psUXFnK5T/XU2n5rVOkVG+fcws2KLjjkd3Q7dCh0Xuez1 nN7hsWMGTbdD96zYpWNO16n+Oh01aFbrFDGnrjMtdumY09Ht0O3w+DqX7YABODx2zKDpVghMiS0q 5oBRba4TqUGzWlRklLrOnNiiYg5IwKHb4fF1LtsBA3B47JhBlyLgEJgVu3TM6aJile6l9Mh8/KGy yqzYpWNOV4qAQ8Dh8XUu2wEDUOh4ZwZdim6HwKzYpWIOKItVuut4ZPZ9qGQUVpkVu3TMAUsReEe3 Qsd1rtwBM3B4/M4MuhTdCplZsUvHHFAWS7wQ20L3i1lNFjGHJWbFLhVzwFJk3tHt8PhSV26CMTg8 bpgpr0XAITYrdqmYA/piiRcyW+h+Mav5IqOwxKzYpWMOuBaxBgGHx5e6chOMweFxw4x4LQIOsYmx Uccc0Bf5BbEYfQuzmi9iDvmJsVHHHHAtYg0CDo8vdeUmGINCx8KMeC26FZKzYpeKOaMp8gsyMfoW ZjVTZBTys2KXijnjWiQXdCt0XOriTTAJh8cLM+K2CDgkJ8ZGHXNAU4QbxBQ6GmY1U8QcwhNjo445 YFskFwQcHl/t4n0wDIfHCzPitgg4JCfGRhVzxrYIN8godDTMam2RUQhPjI065oxtkVwQcHh8tYv3 wTAcHi/MiNsioBCeGBt1zBnbIrkgoNDxzqzWFjGH5MTYqGLO2BbhBQGHx1e7eB8MQ6HjxYzYFAGH 8MTYqGLOuBbJBd0KHe/MamuRUUhOjI065oymCL8QUOi42vX7YB4Oj1/MiNuiO0B+YmzUMcdci9gL rQodjlltLWIOsYmx0YA5ZlvkX+h2eDyB67fCSBwev5gRmyKgkJ8YG1XMMWsRe6FPocMxq9UioxCb GBtVzDFNkX8h4PB4AtdvhZEodDz6Qy3Yq2OOWYvMvrl5ZrVaxBwyc2OvijmmKfJ/neRgU2yFqTg8 3vpQSxFQWGJibFQxxyxF5q/Xy6xWioxCZmJsVDHH9MUSO67fDKbYDYNxePz0D7Vgr445Zql+f1Eb Ima1UsQcAnNjr4o5pi+W2HH9ZjDFbhiMUhvMiGURUOoiM2OjijnmZn9tiJjVyCgEJsZGFXNMWZuL 1IZJTLEbBqPUBjNiX3QH6iKTY6+OOWmns6hLdZjViDl0z429BsxJfW0uUhsmMctumI1Tn5oRt0Vf V11kcuxVac/b76xLdbRLkVHonht77WrPa6q/SH06j1k2xHic+tSMuBYdO9RF5sd2nZ2nLk9ZKLZn KVqnx3Z3aE+9Vn+R+nQet/xQebZbXWR+bFfZc/bylIVie9ahdXpsd7f17LX6i9Sn85j9Qy3K03W4 /OmIuv5dsGln8/i1gVVita2zFH03waaPWCfQj9f15zHRhpiQUx51LlZfXflG2LfSH8J6+fpqGxmF vvtg3wfVWfEPp648lRt8qH/DojfEAY6on1+9fH21jZhD0w1xgJOw6Ezm2hNz+gxr3RbHOOLQh0pG oem2OMZnWGsyj/pQWeX+OM8+61e650Mlo9Bxf5znr1hlMtNti2kdRPgpONU++aFKnOogwvO5/YdK 7HE43pb2K938UMkodDwOx9uN2Hxm3Bkz20L3Q3HILfmh7sEht9A9pUk3x+QCND0dp42Zr7QUSYWM QsfTcdoATbO62YfK49/AmWPmKy1FUiGj0PEbOLPD41nNuz/mt+CvP4bDK+YTrUXMIaPQ8WM4/IK/ TuxHf6e74B4p5hOtRcwho9CR5pa/07z4khTzfa5F8h2ZGH1pYvkjzYvPSDHf51ok35GJ0Zcmlj/S pPiGFPNxtkW4QWYL3WlW+QtNig9IMR9nW4QbZLbQnWaVv9CM+HoU82WaIr8gsw+ZNKX8eWbEp6OY L9MU+QWZfcikKeXPMx2+G8V8lr5Y4oXMESTTfPK3mQ4fjWI+S18s8ULmCJJpPvnbzIUvRjHfpCxW 2VqH/1PIp8nkDzMXPhel/SCjYpX8UB8nf5iJ8K0o7dfYqf3r8G+lLpKmkr/KRPhQlPUD69f+dfi3 UhdJU8lfZRZ8Jcr6dW3WoXX4q1K3lOaRP8ks+EQU84F16tA6/FWpW0rzyJ9kCnwfSnlqPrBOkVFM Z6nN96Z55O8xBT4OpTw1H1inyCims9Tme9M88ve4Hl+GUhvMB9YpYo5pq1UXp0OpDWkG+WNcj89C qQ3mA4uKjGI6a9XF6VBqQ5pB/hgX45tQ6Pj4QzVta7F6fqt3kL/ExfggFDr2fahkFNO5Fqvnh3oH +Utcia9BoePFfGCyiDmmrS1Wf6FboSNdKn+GK/EpKHS8mA/MFxnFdLbF6i90K3SkS+XPcBm+A4WO hfnAfBFzTJspVl+QUehI18nf4DJ8BA6PG+YDM0VMMZ2mWL1BzOFxuk7+BtfgC1DoaJgPzBQxxXSa YvUGMYWOdJH8Aa7B9Xd4/M58YG0Ri5n+tlj9HTGHx+ki+QNcgLuv0PHOfGBtEYuZ/rZY/R0xhY50 hZz+aNx6hQ7HfGBrEdtiUmuxukNMoSMNl6MfjSuv0OGYD2wtYltMai1Wd4gpdKThcvRDcd8VOhTz gdUito/J1mJ1hZhCRxor5z4Ul12hQzEfWC1i+5hsLVZXiCl0pLFy7uNw0xU6AuYDK0XMKc38n2NW KFUXjxBT6EgD5dDH4ZordATMB1aKmFOa+T/HrFCqLh4hptCRBsqhD8IdV+iImQ+MmEP37m+V7hgx hY40Sk58EC64QkfMfGDEHLrzQ32inPgI3G6Fjq726yLm0Lrgr067FK1dxBQ60hA57hG42s7Or6X9 ukg6tC74q9MuRWvX/jemr8pxfx33Wtn/tdQi5tD3jmfOuhp9XZ2XFjSl78tZfx2X2jn0tdQi6dD3 jmfOuhp9XX94b/qGnPV3caOVAV8LHc5Zry7oS1+Wg/4urrNTP4BTvhaaFDqco6/+29vTiXLQX8Rd VtYPgNauT74T+pz9r65FTKE1fVNO+Yu4yM56+0vR2kVMoSNGn0JHV7tVYg6t6Ztyyt/CLVba2093 jIxCxxa6FTpi7VbJKHSnr8kRfwtX2Gmvfim6Y8QUOrbQrdARM7sl5tCdviZH/BXcX8VcfQIBMgod +5BR6AiY3ZJRCKTvyPl+BZfXMfe+FIEAMYWOfcgodATMbksRcwik78j5no+bq5hLX4qMQkah4wiS Ch2K2W0pMgqZ9AU53PNxbR1z42uRUYgpdBxBUqFDMbutRcwhk74gh3sy7qxirnstYg4ZhY7jyCt0 OGa3tcgoxNLZcrIn48I65q6vRcwhptBxHHmFDsfsdi1iDrF0tpzsmbitirnoa5F8R0ah469YRaHj ndntWmQUkulUOdYzcVUdc8vbIvmOmELHX7GKQsc7s9u2iDkk06lyrKfhnirmirdFuEFGoeMzrKXQ 0TC7bYuMQjidJ2d6Gi6pY+63KcINYgodn2EthY6G2a0pYg7hdJ6c6Tm4oYq53KbIL8godJyBFRU6 Fma3psgo5NNJcqDn4Ho65mb7Ir8gptBxBlZU6FiY3foi5pBPJ8mBnoC7qZhr7YslXsgodJyHdRU6 XsxufZFRWCKdIad5Ai6mY+60LJZ4IabQcR7WVeh4MbuVRcxhiXSGnOanuJWKudCyWGXsV1qxukLH Zx9qwSrpYznKT3ElHXObo2KVO3+opYg5rJI+lqP8CPdRMVc5qs11asOX8A6lNpjdRkVGqeukD+Uc P8JldMw97lR/naI2fAnvUGqD2W2niDl1nfShnOPfcRMVc4k71V+nvuireJNSnprddoqMUl+UPpFD /DuuoWIucaf669QXfRVvUspTs9tOkVHqi9Incoh/xB1UylNziTtFRqkvGoD3KWa3neqvU1+U/iwn +EdcQKU8NZe4U2SU+qIBeJ9idtup/jr1RenPcoJ/we1TaoO5xFGRUeo6w/BWxew5qs11akP6mxzf X3D1lNpgLnFUZJS6zjC8VTF7jmpzndqQ/ibHdxj3TqFj34dKRmGVsXi3YnYui1XyW/2OnN1hXDqF jvxQA3Sk43J2x3DjFDpezCX2RUZhiSuwA8Xs3xdLvJBR6EgH5eCO4bopdLyYS+yLjMISV2AHitm/ L5Z4IaPQkQ7KwR3AXVPoWJhLbIqMQv467EMxpzBFfkFGoSMdkVM7gIum0LEwl9gUGYX8ddiHYk5h ivyCjEJHOiKnthe3TKGjYS5xW2QUwldjN4o5S1uEG2QUOtJuObK9uGIKHQ1zidsioxC+GrtRzFna Itwgo9CRdsuR7cL9Uuh4Zy7xWmQUknNgT4o50Vok35FR6Ej75Lx24XIpdLwzl3gtMgrJObAnxZxo LZLvyCh0pH1yXtu4WQodjrnEtcgoxGbCzhRzrlrEHDIKHWmHHNY2rpVCh2MucS0yCrGZsDPFnKsW MYeMQkfaIYe1gTul0KGYS1yKjEJmPuxPMacrRUYho9CRtuSkNnChFDoUc4lLkVHIzIf9KeZ0pcgo ZBQ60pacVA+3SaEjYC4xGYXArNilYs5IIEBGoSN15Zh6uEoKHQFzickoBGbFLhVzRgIBMgodqSvH FOIeKXTE2htMRqF7buxVaY9Jd4yMQkeK5YxCXCKFjlh7g8kodM+NvSrtMemOkVHoSLGckcYNUujo Wq8vGYXWO2DHynpSWrvIKHSkQA5I4/o4O2/ken2JKbTeATtW1pPS2tUZCB0pkAMSuDvK/hvZuZQF fffBvpV6WPq6HjaTkXI6AhfHOXQjH3Yp2bdy1lhoSkpOx+LWKIduJBmFprth98r+sTxyMgPkaCyu jFMv2c4bWRBT6Lgbdq/QsWWdITGHvuTkaN5wX5T1ktHaRUah4544g0JH1zpDMgqt6V3O5Q2XxVlv WClau4gpdNwTZ1Do6GrHSMyhNb3LufwXN0VpbxjdMTIKHXfGSRQ6Yu0YySh0p0YO5b+4Jk57vUrR HSOm0HFnnEShI2YmScyhOzVyKOCOKOZ6EQiQUei4P86j0BEwkySjEEiLnAi4II65W6UIBIgpdNwf 51HoCJhJliLmEEiLnMi/uB2KuVilyChkFDqeglMpdChmkqXIKGTSS47jX1wNx9yqWmQUYgodT8Gp FDoUM8laxBwy6SXH0btz5krVIuaQUeh4Fs6m0OGYSdYioxBL+aEWXArH3Ke1iDnEFDqehbMpdDhm kmsRc4il/FC5EYq5TGuRfEdGoeOJOKFCxzszybXIKCR/Xn6omrlJbZF8R0yh44k4oULHOzPJtog5 JH/eTw+Cu6CYa9QW4QYZhY7n4pwKHQ0zybbIKIR/W36ogrlDpgg3iCl0PBfnVOhomEmaIuYQ/m2/ OwVugWIukCnyCzIKHU/HaRU6FmaSpsgo5H9YfqiWuT2+yC+IKXQ8HadV6FiYSfoi5pD/YT86An5/ xVwdXyzxQkah4zdwZoWOFzNJX2QUlvhV+aG+MfdGFku8EFPo+A2cWaHjxUxSFjGHJX7VL56fX14x l0YWq+RX+o6TK3R89qEWrPKT8kr9l7kxUbFKfqjvOLlCx74PtRQxh1V+0s8dnt9cMdclqs11asMP 4vxKbTCTjIqMUtf5QfmhwtyVTvXXKWrDD+L8Sm0wk+wUMaeu84N+6+T82oq5KJ3qr1Nf9LOYglKe mkl2ioxSX/Rr8kOFuSid6q9TX/SzmIJSnppJdoqMUl/0a37o2PzOSnlqLkqnyCj1RT+OWShmkp3q r1Nf9FPyQ/1XeWouSqfIKPVFP45ZKGaSneqvU1/0U37lzPzCSm0wFyUqMkpdJxVMRDHzjGpzndrw O/JDzQ/1fExEMfOManOd2vA7fuLA/LYKHfs+VDIKq6QFc1HMVGWxSn6ri/xQYS6KLDIKq6QFc1HM VGWxSn6oi+efll9VoePFXBRfZBSWSO+YjmJm64slXsgodPyA/FBhLoovMgpLpHdMRzGz9cUSL2QU On7Aw4/K76nQsTAXxRQZhXxSmJFiJmyK/IKMQsfT5YcKc1FMkVHIJ4UZKWbCpsgvyCh0PN2Tz8kv qdDRMBelLTIK4RRjUoqZc1uEG2QUOh4tP1SYi9IWGYVwijEpxcy5LcINMgodj/bYQ/IbKnS8Mxdl LTIKybSFeSlm2muRfEdGoeO58kOFuShrkVFIpi3MSzHTXovkOzIKHc/1zBPy6yl0OOai1CKjEEv7 MDXFzLwWMYeMQsdD5YcKc1FqkVGIpX2YmmJmXouYQ0ah46EeeDx+N4UOxVyUUmQUMukIZqeYyZci o5BR6Hii/FBhLkopMgqZdASzU8zkS5FRyCh0PNHTzsYvptARMBeFjEIgHccEFTN/AgEyCh2Pkx8q zEUhoxBIxzFBxcyfQICMQsfjPOpg/FYKHbH2lpBR6E5/xRyV9iegO0ZGoeNZ8kNFe0vIKHSnv2KO SvsT0B0jo9DxLM85Fb+SQkfXekXIKLSmzzBNZf0VaO0io9DxIM//UHm8Zb0ixBRa02eYprL+CrRu Iebw+EEeciR+H4WOLfmVjsRMlVM+1IKOp3j4h8rjHfJDHYmZKoc+1IKYw+OneMJ5+GUUOnbIr3Qw Jquc8qEWdDzC7Q/Db6LQsU9+qIMxWeXQh1oQU+i4vyd/qAVNOxBQ6EhnY74KHTsQCNB0fw//UCta u2hV6EhnY74KHV20dtF6fz/xoVYEFDoUOtJ3MGWFDoWOHQjc3w99qBWxdzxzeJy+iVk7PH7Hs92I 3d8TTsJvcgTJF/6k0JG+iVkrdLzwpyNIPsJDDsMvc1A/W5+mAZi403/aV7OP8ajz8BOdhEXT9zHx k7DoszzwVPxcn2GtNApz/wxrPdFjz8ZP91eskkZh7n/FKs/18BPyMx5EOI3F9A8i/HQ/cU5+0t2I pbGY/m7EfsMPnZafdwvd6Qr8Blvo/iU/d2Z+6gBN6Tr8EgGafs+Pnpyf3eFxug6/hMPjX/XT5+cK LPhruhq/x4K//racQko3kB9qSjeQH2pKN5Afako3kB9qSjeQH2pKN5Afako3kB9qSjeQH2pKN5Af ako3kB9qSjeQH2pKN5Afako3kB9qSjeQH2pK0/vnn/8Hs0rzECk5r4kAAAAASUVORK5CYII="
    />
    <path d="M0 156V0h312v312H0z" fill="#fff" />
    <path
      className={styles[props.colour]}
      d="M73.744 292.87c-7.753-4.024-9.894-5.608-10.429-7.715-.555-2.188 5.78-15.483 36.204-75.976l36.877-73.324-7.777-15.676c-4.278-8.622-10.275-20.122-13.328-25.555-11.127-19.807-27.522-38.663-38.413-44.182-6.57-3.329-9.698-2.933-12.328 1.562-2.634 4.498-2.69 16.822-.132 29 1.577 7.512 8.267 29.067 11.662 37.574 2.328 5.835.886 7.745-10.111 13.394-11.994 6.16-14.205 6.222-18.214.501-3.036-4.33-8.064-21.526-11.98-40.969-2.985-14.817-3.205-41.846-.416-50.97 3.743-12.244 9.301-19.687 17.902-23.973 6.601-3.29 17.414-3.519 26.956-.572 11.439 3.534 27.602 15.318 38.96 28.407 9.102 10.49 23.561 32.128 29.874 44.708 2.732 5.445 5.185 9.9 5.45 9.9s2.717-4.455 5.45-9.9c6.312-12.58 20.77-34.218 29.873-44.708 11.357-13.089 27.52-24.874 38.96-28.407 9.542-2.947 20.354-2.717 26.956.572 8.601 4.287 14.16 11.73 17.902 23.973 2.79 9.125 2.57 36.153-.415 50.97-3.917 19.444-8.945 36.638-11.98 40.97-4.01 5.72-6.22 5.659-18.214-.502-10.998-5.65-12.44-7.559-10.111-13.394 3.394-8.507 10.084-30.062 11.662-37.574 2.557-12.178 2.501-24.502-.132-29-2.632-4.495-5.76-4.891-12.328-1.562-10.891 5.519-27.286 24.376-38.413 44.182-3.053 5.434-9.05 16.934-13.328 25.555l-7.778 15.676 36.877 73.324c30.447 60.54 36.76 73.787 36.203 75.979-.538 2.122-2.664 3.677-10.593 7.75-12.343 6.34-14.116 6.422-18.158.845-1.694-2.338-16.333-30.688-32.53-63-16.199-32.312-29.654-58.75-29.902-58.75s-13.704 26.438-29.9 58.75c-16.199 32.312-30.837 60.662-32.532 63-4.05 5.588-6.04 5.493-18.324-.883zm12.253-8.862c.63-1.177.952-6.613.785-13.25l-.283-11.254-5.788 10.878c-3.184 5.983-5.659 10.989-5.5 11.124.757.646 8.375 4.414 9.003 4.453.393.024 1.196-.854 1.783-1.951zm143.29-.128c2.316-1.167 4.34-2.235 4.499-2.371.158-.137-2.317-5.145-5.5-11.127l-5.789-10.878-.283 11.254c-.25 9.972.565 15.246 2.358 15.246.278 0 2.4-.956 4.715-2.123zm-120.77-44.92l4.542-9.045-.282-11.206-.282-11.206-4.75 9.23-4.75 9.23v11.02c0 6.061.22 11.02.49 11.02s2.534-4.07 5.032-9.044zm92.76-22.162l-4.782-9.294-.283 11.206-.282 11.206 4.782 9.294 4.783 9.295.282-11.206.282-11.206zm-66.792-29.774c4.497-8.953 4.51-9.011 4.51-19.559 0-6.982-.35-10.363-1.027-9.944-.565.35-2.815 4.19-5 8.537-3.913 7.782-3.973 8.07-3.973 18.924 0 6.062.22 11.022.49 11.022s2.52-4.041 5-8.98zm41.569-20.902c-2.203-4.381-4.468-8.252-5.032-8.6-.678-.42-1.027 2.961-1.027 9.944v10.579l4.75 9.23 4.75 9.23.282-11.208.282-11.208zm-16.038-29.16l4.043-8.042-.282-11.208-.282-11.208-4.25 8.228c-4.246 8.219-4.25 8.24-4.25 19.25 0 6.062.22 11.022.489 11.022s2.308-3.619 4.532-8.042zM54.696 93.504c-.42-11.743-2.844-32.5-3.796-32.5-.888 0-2.69 12.465-3.48 24.07-.636 9.364.667 17.43 4.835 29.93 1.155 3.464 1.175 3.423 1.983-4 .448-4.125.655-12 .458-17.5zm204.83 11.47c2.346-9.167 2.6-11.643 2.04-19.9-.785-11.595-2.588-24.07-3.477-24.07-.73 0-3.137 18.486-3.842 29.5-.588 9.176.704 28.325 1.781 26.401.45-.804 2.024-6.173 3.498-11.932zm-111.53 7.03c0-.89-.66-2.491-1.468-3.559-1.348-1.782-1.468-1.492-1.468 3.56s.12 5.34 1.468 3.558c.807-1.068 1.468-2.67 1.468-3.559zM124.518 68.07c-2.502-3.61-6.101-8.365-7.998-10.565-4.24-4.917-4.364-4.026-1.394 9.966 1.78 8.387 3.053 11.575 7.75 19.418l5.62 9.384.286-10.819.285-10.819zm62.17 17.935c4.122-6.905 5.471-10.383 7.191-18.534 2.908-13.782 2.806-14.855-.996-10.466-1.667 1.925-5.249 6.625-7.959 10.444l-4.928 6.944v11.006c0 6.053.364 10.579.809 10.056s3.092-4.775 5.883-9.45zM93.884 41.97l-4.247-10.234-7.543-3.582c-8.404-3.99-17.396-5.222-22.598-3.094l-3 1.227 3.754.845c7.87 1.77 19.856 9.61 32.185 21.05 2.772 2.573 5.187 4.53 5.368 4.35s-1.583-4.933-3.92-10.562zm134.62-3.797c7.765-6.011 14.702-9.795 20.242-11.041l3.754-.844-3-1.228c-5.201-2.128-14.194-.896-22.598 3.094l-7.543 3.583-4.18 10.07c-2.298 5.54-4.18 10.39-4.18 10.78 0 .39 2.39-1.494 5.309-4.186s8.407-7.295 12.196-10.228z"
      fill="#eea7aa"
    />
    <path
      className={styles[props.colour]}
      d="M75.5 293.34c-10.053-5.093-12.509-6.912-12.481-9.245.01-.877 16.644-34.596 36.963-74.93l36.944-73.335-8.897-17.772c-11.214-22.402-17.224-32.576-26.577-44.992C89.732 57.507 77.75 48.03 69.775 48.01c-5.498-.013-7.268 3.759-7.268 15.491 0 11.696 2.515 23.81 8.639 41.604 6.266 18.207 6.355 18.587 4.774 20.491-2.053 2.475-20.865 11.554-23.229 11.212-4.99-.723-11.13-17.537-16.913-46.307-2.958-14.723-3.174-39.92-.419-48.957C39.14 29.14 45.587 20.378 53.912 16.328c5.606-2.726 16.71-2.941 24.803-.48 23.197 7.054 51.556 36.808 69.85 73.282 2.998 5.979 5.668 10.87 5.934 10.87s2.937-4.891 5.935-10.87c18.292-36.474 46.652-66.228 69.849-73.282 8.094-2.461 19.197-2.246 24.803.48 8.325 4.05 14.772 12.812 18.553 25.215 2.755 9.038 2.54 34.235-.42 48.957-5.78 28.77-11.921 45.583-16.912 46.307-2.364.343-21.175-8.736-23.23-11.212-1.58-1.904-1.491-2.284 4.775-20.49 6.125-17.795 8.64-29.909 8.64-41.605-.001-11.732-1.771-15.504-7.27-15.49-7.974.02-19.956 9.498-31.676 25.056-9.353 12.416-15.362 22.59-26.577 44.992l-8.897 17.772 36.944 73.335c20.32 40.334 36.952 74.053 36.963 74.93.01.878-.768 2.291-1.73 3.141C241.5 289.663 224.264 298 221.995 298c-1.342 0-3.084-1.627-5.084-4.75-1.674-2.612-16.296-31.188-32.495-63.5-16.2-32.312-29.662-58.75-29.918-58.75s-13.72 26.438-29.918 58.75c-16.2 32.312-30.822 60.888-32.495 63.5-2.201 3.436-3.671 4.736-5.315 4.7-1.25-.028-6.322-2.103-11.272-4.61zm11.412-10.128c.716-1.73 1.047-7.33.871-14.75L87.5 256.5l-6.25 11.943c-3.438 6.569-6.25 12.296-6.25 12.726 0 1.034 7.05 4.73 9.128 4.786.896.025 2.149-1.21 2.784-2.744zm143.13.768c2.178-1.111 3.96-2.374 3.96-2.807 0-.432-2.812-6.16-6.25-12.73l-6.25-11.943-.283 11.962c-.292 12.292.739 17.538 3.444 17.538.78 0 3.2-.909 5.379-2.02zm-121.52-44.024l5.539-11.044-.28-12.206-.281-12.206-5.75 11.233-5.75 11.233v12.017c0 6.609.221 12.017.492 12.017.27 0 2.984-4.97 6.03-11.044zm92.758-24.162L195.5 204.5l-.28 12.206-.281 12.206 5.78 11.294 5.78 11.294.281-12.206.28-12.206zm-66.405-28.363L140 177.36l-.032-11.93c-.037-13.795.007-13.8-7.46.658L128 174.818v12.291c0 7.081.37 11.888.875 11.341.481-.522 3.181-5.481 6-11.019zm41.647-21.282c-7.505-14.531-7.456-14.527-7.477-.648l-.017 12 5.736 11 5.736 11 .28-12.281.282-12.281-4.54-8.79zm-16.501-28.191l5.04-10.042-.28-12.208-.281-12.208-5.25 10.232-5.25 10.232v12.018c0 6.61.22 12.018.49 12.018s2.76-4.52 5.531-10.042zM54.461 83.006c-1.928-10.08-2.464-23.87-1.186-30.506.572-2.97.499-3.557-.283-2.28-2.08 3.396-4.906 16.92-6.06 28.99L45.758 91.5l3.725 14c2.05 7.7 4.016 15.125 4.37 16.5s1.045-4.698 1.535-13.494c.77-13.821.644-17.286-.927-25.5zm205.66 20.494c3.093-11.968 3.098-12.032 1.94-24.29-1.139-12.056-3.96-25.584-6.046-28.99-.782-1.277-.855-.69-.283 2.28 1.26 6.54.674 21.404-1.201 30.474-1.473 7.126-1.634 11.103-1.012 25 .843 18.84.52 19.06 6.602-4.474zM147.001 116l2.04-4-2.04-4c-1.122-2.2-2.257-4-2.52-4-.264 0-.48 3.6-.48 8s.216 8 .48 8 1.398-1.8 2.52-4zM124.09 66.818c-7.604-10.588-11.737-15.471-12.481-14.745-.323.315.505 5.838 1.84 12.273 2.1 10.133 3.127 12.87 7.66 20.427 9.348 15.587 8.353 15.352 8.673 2.044l.281-11.682zm63.535 18.403c4.83-8.114 5.828-10.743 7.94-20.927 1.328-6.406 2.151-11.905 1.828-12.22-.743-.726-4.876 4.154-12.45 14.7l-5.942 8.275.045 11.726c.051 13.527-.454 13.618 8.579-1.554zM96.306 45.25c-2.478-5.913-5.396-11.717-6.485-12.9-3.738-4.058-13.655-7.75-21.82-8.122-8.694-.396-12.75 1.249-16.906 6.857l-2.53 3.415 2.468-2.125c5.831-5.02 8.35-5.348 15.468-2.012 5.965 2.796 23.394 15.757 28.953 21.531 2.174 2.258 4.269 4.106 4.655 4.106.386 0-1.325-4.838-3.803-10.75zm117.24 6.644c5.559-5.774 22.988-18.735 28.953-21.531 7.118-3.336 9.637-3.009 15.468 2.012l2.468 2.125-2.53-3.415c-4.157-5.608-8.212-7.253-16.906-6.857-8.166.372-18.083 4.064-21.82 8.123C217.018 34.697 207.75 56 208.89 56c.387 0 2.481-1.848 4.655-4.106z"
      fill="#a2a1a1"
    />
    <path
      className={styles[props.colour]}
      d="M74.5 291.71c-7.104-3.703-10.073-5.79-10.251-7.212-.138-1.1 16.383-35 36.713-75.335l36.964-73.335-8.897-17.772c-11.22-22.414-17.224-32.576-26.597-45.019-12.427-16.497-25.259-26.509-33.13-25.849-5.739.481-7.803 4.798-7.799 16.311.005 11.753 2.537 23.887 8.682 41.604 7.146 20.603 7.381 19.32-4.685 25.608-5.5 2.867-10.994 5.23-12.208 5.25-3.384.059-6.99-7.13-10.89-21.708-6.396-23.907-7.832-33.195-7.845-50.754-.014-17.113 1.031-22.807 5.976-32.565 2.968-5.856 11.041-13.19 16.231-14.746 17.775-5.325 41.008 5.794 61.867 29.607 9.587 10.946 23.357 31.727 29.829 45.018 2.728 5.603 5.446 10.186 6.04 10.186s3.312-4.584 6.04-10.186c6.472-13.29 20.24-34.072 29.829-45.018 20.859-23.814 44.092-34.933 61.867-29.607 5.19 1.555 13.264 8.89 16.23 14.746 4.945 9.758 5.99 15.452 5.977 32.565-.014 17.558-1.45 26.846-7.845 50.754-3.9 14.58-7.507 21.767-10.89 21.708-1.215-.02-6.708-2.383-12.208-5.25-12.066-6.288-11.831-5.004-4.685-25.608 6.145-17.717 8.677-29.85 8.681-41.604.004-11.513-2.06-15.829-7.799-16.31-7.87-.66-20.703 9.352-33.13 25.848-9.373 12.444-15.377 22.605-26.597 45.02l-8.896 17.771 36.964 73.335c20.33 40.334 36.85 74.235 36.713 75.335-.179 1.421-3.147 3.51-10.251 7.212-5.5 2.866-11.003 5.229-12.23 5.25-3.047.052-3.58-.923-37.566-68.71-16.062-32.037-29.654-58.249-30.204-58.249s-14.142 26.212-30.204 58.249c-33.987 67.788-34.52 68.763-37.566 68.71-1.227-.021-6.73-2.384-12.23-5.25zm12.465-6.646c1.135-2.122 1.45-27.317.355-28.412-.694-.695-13.32 22.866-13.32 24.856 0 1.264 7.663 5.336 10.215 5.428.943.034 2.18-.808 2.75-1.872zm143.51-.265c2.49-1.21 4.527-2.692 4.527-3.293 0-1.99-12.626-25.548-13.32-24.854-1.095 1.095-.78 26.29.355 28.412 1.33 2.484 2.878 2.436 8.438-.265zm-116.41-66.644c-.077-6.864-.42-12.93-.76-13.481-.34-.55-2.999 3.684-5.908 9.411l-5.289 10.412-.051 13.083c-.029 7.196.27 13.406.665 13.8.394.394 3.139-4.113 6.1-10.015l5.384-10.732-.141-12.479zm92.889 19.534l-.051-13.191-5.29-10.412c-2.909-5.727-5.567-9.962-5.908-9.411-.34.55-.682 6.603-.759 13.45l-.14 12.449 5.296 10.65c2.913 5.857 5.658 10.427 6.1 10.154s.78-6.433.752-13.687zm-67-70.882c.028-6.98-.313-12.916-.758-13.191-.445-.275-3.145 3.91-6 9.302l-5.19 9.802v12.973c0 7.135.322 13.295.715 13.689.394.394 3.071-3.919 5.95-9.584l5.232-10.299.051-12.69zm41.051 18.993v-13.08l-5.19-9.802c-2.855-5.391-5.555-9.577-6-9.302-.446.275-.81 6.093-.81 12.93v12.428l5.197 10.45c2.858 5.746 5.558 10.225 6 9.952s.803-6.382.803-13.577zm-16.051-68.493c.028-7.255-.311-13.415-.754-13.688-.443-.274-2.918 3.756-5.5 8.954l-4.695 9.452v12.82c0 7.05.322 13.142.715 13.536.394.393 2.846-3.47 5.45-8.584l4.733-9.298.051-13.191zm-109.6-5.466c.89-16.562.785-26.577-.33-31.343-3.125-13.358-2.057-28.214 2.514-34.95 1.325-1.952 2.02-3.55 1.544-3.55s-2.268 2.185-3.982 4.856c-3.876 6.041-6.58 16.817-8.422 33.554l-1.42 12.91 3.478 13.09c1.913 7.2 3.71 14.102 3.992 15.34 1.13 4.955 2.004 1.657 2.626-9.907zm200.93 9.907c.282-1.238 2.078-8.14 3.991-15.34l3.478-13.09-1.42-12.91c-1.84-16.738-4.545-27.513-8.422-33.554-1.713-2.67-3.505-4.856-3.981-4.856s.218 1.598 1.544 3.55c4.57 6.736 5.639 21.593 2.514 34.95-1.116 4.765-1.221 14.78-.33 31.343.621 11.564 1.496 14.862 2.626 9.907zm-108.45-14.168c-1.198-2.466-2.55-4.254-3.003-3.973-1.006.621-1.11 15.773-.114 16.768.39.39 1.742-1.32 3.002-3.801l2.293-4.512zm-17.827-21.738v-12.04l-5.409-7.651c-6.962-9.85-12.203-15.836-13.099-14.961-.39.38.24 5.005 1.4 10.278 1.16 5.272 2.108 10.774 2.108 12.224s1.96 5.825 4.354 9.721c2.395 3.897 5.392 8.979 6.661 11.293 1.27 2.316 2.685 3.977 3.147 3.691.461-.285.838-5.935.838-12.557zm58.825-.967c2.846-4.743 5.175-9.793 5.175-11.222s.949-6.912 2.109-12.185c1.16-5.273 1.79-9.898 1.4-10.278-.896-.875-6.137 5.11-13.1 14.961l-5.408 7.652v11.931c0 6.562.309 12.24.686 12.617.377.378 1.424-.56 2.325-2.083s3.967-6.65 6.813-11.393zM95.644 43.761c-5.72-13.455-7.057-14.906-17.267-18.725-6.655-2.49-16.204-2.684-20.962-.426-3.505 1.663-9.407 7.64-9.407 9.527 0 .588 1.583-.321 3.518-2.02 6.27-5.505 10.48-5.15 21.216 1.789 6.323 4.086 9.985 7.128 20.181 16.765 3.592 3.394 6.842 5.978 7.224 5.742.381-.235-1.645-5.929-4.503-12.652zm130.87-2.66c5.333-4.669 14.92-10.759 19.117-12.144 4.478-1.477 7.49-.675 11.857 3.16 1.935 1.698 3.518 2.608 3.518 2.02 0-1.887-5.902-7.864-9.407-9.528-4.758-2.258-14.307-2.064-20.962.426-10.202 3.818-11.549 5.276-17.244 18.672-2.845 6.694-4.92 12.423-4.611 12.732.309.31 3.552-2.25 7.207-5.69s8.391-7.78 10.526-9.648z"
      fill="#ec6267"
    />
    <path
      className={styles[props.colour]}
      d="M74.5 291.71c-7.104-3.703-10.073-5.79-10.251-7.212-.138-1.1 16.383-35 36.713-75.335l36.964-73.335-8.897-17.772c-11.22-22.414-17.224-32.576-26.597-45.019-12.427-16.497-25.259-26.509-33.13-25.849-5.739.481-7.803 4.798-7.799 16.311.005 11.753 2.537 23.887 8.682 41.604 7.146 20.603 7.381 19.32-4.685 25.608-5.5 2.867-10.994 5.23-12.208 5.25-3.384.059-6.99-7.13-10.89-21.708-6.396-23.907-7.832-33.195-7.845-50.754-.014-17.113 1.031-22.807 5.976-32.565 2.968-5.856 11.041-13.19 16.231-14.746 17.775-5.325 41.008 5.794 61.867 29.607 9.587 10.946 23.357 31.727 29.829 45.018 2.728 5.603 5.446 10.186 6.04 10.186s3.312-4.584 6.04-10.186c6.472-13.29 20.24-34.072 29.829-45.018 20.859-23.814 44.092-34.933 61.867-29.607 5.19 1.555 13.264 8.89 16.23 14.746 4.945 9.758 5.99 15.452 5.977 32.565-.014 17.558-1.45 26.846-7.845 50.754-3.9 14.58-7.507 21.767-10.89 21.708-1.215-.02-6.708-2.383-12.208-5.25-12.066-6.288-11.831-5.004-4.685-25.608 6.145-17.717 8.677-29.85 8.681-41.604.004-11.513-2.06-15.829-7.799-16.31-7.87-.66-20.703 9.352-33.13 25.848-9.373 12.444-15.377 22.605-26.597 45.02l-8.896 17.771 36.964 73.335c20.33 40.334 36.85 74.235 36.713 75.335-.179 1.421-3.147 3.51-10.251 7.212-5.5 2.866-11.003 5.229-12.23 5.25-3.047.052-3.58-.923-37.566-68.71-16.062-32.037-29.654-58.249-30.204-58.249s-14.142 26.212-30.204 58.249c-33.987 67.788-34.52 68.763-37.566 68.71-1.227-.021-6.73-2.384-12.23-5.25zm13.051-8.18c1.659-3.97 2.1-28.532.514-28.532-.989 0-14.065 24.653-14.065 26.517 0 1.282 7.694 5.332 10.3 5.422 1.14.039 2.333-1.211 3.25-3.406zm142.92 1.269c2.49-1.21 4.527-2.689 4.527-3.286 0-1.863-13.077-26.514-14.065-26.514-1.587 0-1.145 24.562.513 28.532 1.697 4.059 2.925 4.232 9.025 1.268zm-121.45-43.937l5.973-12.137v-12.863c0-7.842-.387-12.863-.992-12.863-.546 0-3.696 5.393-7 11.985l-6.008 11.985v13.015c0 8.238.377 13.015 1.027 13.015.565 0 3.715-5.462 7-12.137zm98.973-.879v-13.015l-6.008-11.985c-3.304-6.591-6.454-11.985-7-11.985-.605 0-.992 5.021-.992 12.863v12.863l5.973 12.137c3.285 6.675 6.435 12.137 7 12.137.65 0 1.027-4.777 1.027-13.015zm-73.008-50.969l6.008-11.985V164.43c0-9.046-.324-12.49-1.15-12.216-.632.21-3.775 5.31-6.985 11.333l-5.837 10.95-.014 13.25c-.009 8.108.37 13.25.978 13.25.546 0 3.696-5.393 7-11.985zm46.993-1.265l-.014-13.25-5.837-10.95c-3.21-6.023-6.353-11.123-6.985-11.333-.826-.275-1.15 3.169-1.15 12.216v12.599l6.008 11.985c3.304 6.591 6.454 11.985 7 11.985.607 0 .987-5.143.978-13.25zm-21.457-48.898l5.471-11.148V114.85c0-8.141-.377-12.852-1.029-12.852-.565 0-3.49 5.016-6.5 11.148l-5.47 11.148v12.852c0 8.14.376 12.852 1.028 12.852.566 0 3.49-5.017 6.5-11.148zM55.362 83.518c-2.609-15.43-2.464-28.665.378-34.52 1.202-2.474 2.93-5.512 3.84-6.75 2.525-3.433-.25-2.823-3.634.799-5.374 5.752-9.387 21.199-10.431 40.146-.514 9.335.208 13.506 5.682 32.806 3.61 12.724 4.197 12.089 5.16-5.57.745-13.64.604-17.454-.995-26.911zm202.43 32.48c5.492-19.471 6.184-23.477 5.67-32.805-1.043-18.947-5.057-34.393-10.43-40.146-3.384-3.622-6.16-4.232-3.634-.798 4.772 6.488 6.05 10.996 6.023 21.25-.014 5.5-.834 14.5-1.823 20-1.496 8.33-1.676 12.729-1.079 26.339.807 18.36 1.578 19.26 5.273 6.16zm-110.31 1l2.534-5-2.534-5c-1.393-2.75-2.976-5-3.517-5-.578 0-.983 4.115-.983 10s.405 10 .983 10c.54 0 2.124-2.25 3.517-5zm-16.5-29.475V75.047l-6.25-8.742c-3.437-4.808-8.031-10.556-10.208-12.774-3.474-3.54-3.998-3.788-4.287-2.032-.18 1.1.766 7.063 2.104 13.25 1.97 9.107 3.278 12.628 6.872 18.498 2.442 3.988 5.658 9.389 7.147 12.001s3.137 4.75 3.664 4.75c.56 0 .958-5.19.958-12.476zm51.622 7.726c1.489-2.613 4.705-8.013 7.146-12.001 3.595-5.871 4.903-9.392 6.873-18.5 1.338-6.186 2.284-12.148 2.104-13.248-.29-1.756-.813-1.508-4.287 2.031-2.177 2.218-6.77 7.966-10.208 12.774l-6.25 8.742v12.476c0 7.285.398 12.476.957 12.476.527 0 2.176-2.137 3.665-4.75zM97.925 45.714c-4.977-11.971-7.967-15.525-16.307-19.38-5.245-2.423-7.396-2.835-14.794-2.835-8.153 0-8.881.178-12.5 3.06-3.409 2.714-8.809 11.289-7.771 12.34.217.22 1.987-1.417 3.933-3.638 5.55-6.33 8.205-7 15.158-3.816 3.176 1.454 8.038 4.35 10.805 6.435 2.768 2.086 6.137 4.381 7.488 5.101 1.35.72 5.818 4.491 9.927 8.38 4.416 4.18 7.643 6.56 7.89 5.82.23-.688-1.494-5.849-3.83-11.467zm117.4 5.43c3.983-3.77 8.347-7.444 9.698-8.163 1.35-.72 4.72-3.015 7.487-5.1 2.768-2.087 7.63-4.982 10.805-6.436 6.954-3.184 9.609-2.515 15.158 3.816 1.947 2.22 3.717 3.857 3.934 3.637 1.038-1.05-4.363-9.625-7.771-12.34-3.62-2.881-4.348-3.06-12.5-3.06-7.399 0-9.55.413-14.794 2.836-8.312 3.841-11.332 7.41-16.214 19.164-3.967 9.55-4.816 12.5-3.598 12.5.304 0 3.812-3.084 7.795-6.854z"
      fill="#e61e25"
    />
    <path
      d="M74.5 291.71c-7.104-3.703-10.073-5.79-10.251-7.212-.138-1.1 16.383-35 36.713-75.335l36.964-73.335-8.897-17.772c-11.22-22.414-17.224-32.576-26.597-45.019-12.427-16.497-25.259-26.509-33.13-25.849-5.739.481-7.803 4.798-7.799 16.311.005 11.753 2.537 23.887 8.682 41.604 7.146 20.603 7.381 19.32-4.685 25.608-5.5 2.867-10.994 5.23-12.208 5.25-3.384.059-6.99-7.13-10.89-21.708-6.396-23.907-7.832-33.195-7.845-50.754-.014-17.113 1.031-22.807 5.976-32.565 2.968-5.856 11.041-13.19 16.231-14.746 17.775-5.325 41.008 5.794 61.867 29.607 9.587 10.946 23.357 31.727 29.829 45.018 2.728 5.603 5.446 10.186 6.04 10.186s3.312-4.584 6.04-10.186c6.472-13.29 20.24-34.072 29.829-45.018 20.859-23.814 44.092-34.933 61.867-29.607 5.19 1.555 13.264 8.89 16.23 14.746 4.945 9.758 5.99 15.452 5.977 32.565-.014 17.558-1.45 26.846-7.845 50.754-3.9 14.58-7.507 21.767-10.89 21.708-1.215-.02-6.708-2.383-12.208-5.25-12.066-6.288-11.831-5.004-4.685-25.608 6.145-17.717 8.677-29.85 8.681-41.604.004-11.513-2.06-15.829-7.799-16.31-7.87-.66-20.703 9.352-33.13 25.848-9.373 12.444-15.377 22.605-26.597 45.02l-8.896 17.771 36.964 73.335c20.33 40.334 36.85 74.235 36.713 75.335-.179 1.421-3.147 3.51-10.251 7.212-5.5 2.866-11.003 5.229-12.23 5.25-3.047.052-3.58-.923-37.566-68.71-16.062-32.037-29.654-58.249-30.204-58.249s-14.142 26.212-30.204 58.249c-33.987 67.788-34.52 68.763-37.566 68.71-1.227-.021-6.73-2.384-12.23-5.25zm34.306-50.712c37.885-75.317 71.278-141.22 73.974-146 11.29-20.004 18.098-29.592 27.949-39.358 14.633-14.507 23.874-19.172 33.074-16.694 7.954 2.142 13.041 14.481 11.84 28.718-1.206 14.298-4.34 28.274-10.436 46.525-1.045 3.13-1.632 6.107-1.304 6.616.327.509 2.566 1.924 4.974 3.145 3.626 1.839 4.588 1.99 5.595.885 1.657-1.82 9.253-29.326 9.344-33.836.016-.825.511-5.325 1.099-10 3.311-26.337-.524-46.687-10.26-54.44-3.618-2.882-4.346-3.06-12.5-3.06-10.984 0-16.462 2.397-29.413 12.87-11.584 9.369-20.454 18.705-28.683 30.187-6.499 9.069-11.502 18.733-75.032 144.94-16.058 31.9-30.508 60.356-32.112 63.235-1.604 2.88-2.917 5.828-2.917 6.553 0 1.58 7.787 5.714 10.21 5.42 1.183-.143 8.767-14.237 24.597-45.708zm121.67 43.801c4.768-2.317 5.472-4.006 3.09-7.408-.792-1.13-13.43-26.092-28.086-55.473-28.758-57.652-37.34-73.92-38.999-73.92-1.225 0-6.478 10.256-6.478 12.648 0 .882 5.777 12.684 12.838 26.228s21.31 41.612 31.666 62.374c10.376 20.803 19.415 37.75 20.135 37.75.718 0 3.344-.99 5.833-2.2zm-170.18-160.94c2.316-1.174 4.478-2.55 4.806-3.06s-.26-3.486-1.304-6.616c-6.095-18.25-9.23-32.228-10.436-46.525-1.2-14.237 3.886-26.576 11.84-28.718 9.2-2.477 18.44 2.188 33.074 16.694 8.097 8.029 11.808 12.717 17.804 22.5 10.379 16.933 13.003 21.577 19.663 34.798 3.17 6.292 6.212 11.393 6.762 11.336.55-.056 2.474-2.788 4.275-6.07l3.274-5.967-9.729-18.87c-14.527-28.173-24.708-41.342-44.063-56.997-12.95-10.474-18.428-12.871-29.414-12.871-8.153 0-8.88.178-12.5 3.06-9.735 7.753-13.57 28.103-10.259 54.44.588 4.675 1.082 9.175 1.1 10 .079 3.932 7.589 31.765 9.106 33.75 1.222 1.6 1.051 1.624 6-.885z"
      fill="#5b5b5b"
    />
    <path
      d="M75.245 291.21c-5.09-2.568-9.508-5.467-9.818-6.443-.359-1.13 12.866-28.463 36.464-75.364l37.027-73.59-8.893-17.766c-11.2-22.374-17.22-32.569-26.535-44.934-15.856-21.049-32.77-31.99-38.93-25.183-2.61 2.884-4.467 8.921-4.517 14.685-.094 10.981 4.7 31.726 11.595 50.168 1.91 5.108 3.222 10.076 2.916 11.04-.31.977-4.997 3.938-10.587 6.688-11.05 5.437-11.92 5.416-15.314-.376-2.164-3.694-7.726-23.967-10.875-39.64-2.959-14.722-3.175-39.92-.42-48.956 5.337-17.505 14.324-25.473 28.784-25.521 26.367-.088 56.372 27.138 80.331 72.892 3.864 7.377 7.475 13.453 8.025 13.5.55.047 4.16-5.99 8.024-13.414 23.753-45.65 53.93-73.065 80.331-72.978 14.461.047 23.448 8.016 28.784 25.52 2.755 9.038 2.54 34.236-.42 48.958-3.148 15.672-8.71 35.945-10.874 39.639-3.393 5.792-4.264 5.813-15.314.376-5.59-2.75-10.277-5.71-10.587-6.688-.306-.964 1.006-5.932 2.915-11.04 6.895-18.442 11.69-39.187 11.595-50.168-.049-5.764-1.906-11.8-4.516-14.685-6.16-6.807-23.075 4.134-38.93 25.183-9.314 12.364-15.335 22.56-26.536 44.934l-8.893 17.765 37.027 73.591c23.59 46.885 36.823 74.234 36.464 75.364-.548 1.728-18.259 11.23-20.93 11.23-.733 0-2.175-.93-3.204-2.068s-15.837-29.825-32.905-63.75-31.483-61.652-32.033-61.616c-.55.036-14.965 27.793-32.033 61.68-17.068 33.89-31.875 62.548-32.905 63.685s-2.59 2.042-3.467 2.01c-.878-.033-5.76-2.16-10.85-4.728zm12.619-5.816c.625-1.37 1.135-3.152 1.135-3.96 0-1.91 12.611-27.08 13.998-27.937 1.416-.875 12.002-22.044 12.002-24 0-2.074 11.745-25.496 14.041-28.001 1.009-1.1 6.962-12.634 13.231-25.632 6.27-12.998 12.26-24.742 13.313-26.098s3.88-6.697 6.282-11.868c12.234-26.34 16.9-35.73 19.633-39.508 2.987-4.13 5.389-8.226 13-22.178 4.252-7.793 11.31-17.084 13.042-17.166.573-.027 3.048-2.123 5.5-4.656 2.452-2.534 7.34-6.81 10.861-9.503 13.511-10.332 22.908-8.742 28.842 4.881 3.998 9.176 1.03 38.217-6.135 60.041-1.817 5.534-3.035 10.454-2.706 10.934.328.48 2.797 2.086 5.486 3.57 5.415 2.988 7.046 2.554 7.882-2.1.268-1.494 1.946-8.117 3.729-14.717s3.347-14.25 3.476-17c.13-2.75.595-11.38 1.032-19.176.853-15.184-.414-29.496-3.238-36.591-1.91-4.795-9.472-11.493-13.917-12.327-10.135-1.902-24.23 2.603-31.955 10.212-2.168 2.135-8.371 7.706-13.785 12.382-12.664 10.935-20.61 21.657-29.64 40-3.927 7.975-7.954 15.4-8.95 16.5-2.296 2.535-11.022 19.949-11.022 21.995 0 2.084-11.73 25.374-14.378 28.547-2.223 2.664-7.159 12.37-17.776 34.957-3.49 7.425-7.246 14.658-8.346 16.074-1.1 1.416-4.191 7.266-6.87 13-13.856 29.67-17.23 36.596-18.718 38.426C84.694 257.223 73 280.065 73 281.672c0 1.515 10.93 7.286 12.593 6.648.624-.24 1.646-1.557 2.27-2.928zm148.14-3.719c0-1.607-11.692-24.45-13.912-27.179-1.488-1.83-4.862-8.755-18.719-38.426-2.678-5.734-5.77-11.584-6.87-13-1.1-1.415-4.853-8.649-8.341-16.074-13.875-29.537-19.19-39-21.902-39-1.009 0-6.256 10.45-6.256 12.457 0 2.025 18.49 40.11 19.894 40.977 1.49.922 14.106 26.023 14.106 28.068 0 2.008 10.425 22.774 12.159 24.22 1.692 1.412 13.556 25.86 14.294 29.457.302 1.474 1.25 3.38 2.105 4.236 1.407 1.407 2.122 1.27 7.498-1.445 3.27-1.65 5.943-3.58 5.943-4.292zm-176.38-157.37c2.682-1.48 5.145-3.082 5.473-3.562.329-.48-.889-5.4-2.706-10.934-7.165-21.824-10.133-50.866-6.135-60.04 5.934-13.624 15.33-15.214 28.842-4.882 3.52 2.693 8.408 6.97 10.86 9.503s4.928 4.632 5.5 4.663c1.617.089 9.328 9.866 11.762 14.913 2.568 5.327 10.498 18.83 14.406 24.53 1.508 2.2 5.096 8.788 7.975 14.64 2.879 5.852 5.656 10.9 6.172 11.22 1.267.783 4.538-2.935 7.135-8.11l2.133-4.25-2.133-4.25c-1.173-2.337-2.945-5.15-3.937-6.25s-5.016-8.525-8.942-16.5c-9.03-18.343-16.976-29.065-29.64-40-5.415-4.675-11.618-10.247-13.785-12.382-7.725-7.609-21.82-12.114-31.955-10.212-4.446.834-12.008 7.533-13.917 12.327-2.825 7.095-4.092 21.406-3.24 36.591.439 7.797.903 16.426 1.033 19.176s1.689 10.4 3.464 17 3.465 13.125 3.754 14.5c.46 2.18 2.013 5 2.755 5 .138 0 2.446-1.21 5.127-2.69z"
      fill="#550e11"
    />
    <path
      d="M75.707 290.92c-5.386-2.74-9.995-5.529-10.24-6.199s16.199-34.255 36.544-74.634c20.345-40.379 36.99-73.815 36.99-74.303 0-1.812-19.063-38.597-24.502-47.28-7.378-11.78-18.475-26.344-23.602-30.976C75.2 43.348 64.203 42.223 60.864 54.46c-2.568 9.409.957 30.857 8.708 52.992 2.513 7.178 4.65 13.951 4.75 15.051.143 1.59-1.944 3.096-10.15 7.327-5.68 2.93-10.95 5.088-11.708 4.797-3.537-1.357-10.325-22.52-15.114-47.124-2.473-12.7-2.462-36.777.02-45 5.349-17.728 14.974-26.5 29.076-26.5 25.42 0 58.157 30.3 80.141 74.171 3.908 7.798 7.012 12.83 7.915 12.83s4.007-5.033 7.914-12.83c21.984-43.87 54.722-74.17 80.141-74.17 14.103 0 23.728 8.77 29.077 26.5 2.482 8.222 2.492 32.3.02 45-4.79 24.602-11.577 45.765-15.114 47.123-.76.291-6.029-1.867-11.71-4.797-8.205-4.231-10.291-5.738-10.148-7.327.099-1.1 2.236-7.872 4.75-15.05 5.58-15.938 8.372-28.073 9.19-39.95 1.035-15.007-1.987-21.5-10.005-21.5-4.717 0-12.752 4.515-20.512 11.525-5.127 4.633-16.225 19.196-23.602 30.975-5.439 8.684-24.502 45.47-24.502 47.281 0 .489 16.646 33.925 36.99 74.303 20.345 40.38 36.786 73.973 36.536 74.654-.25.681-5.23 3.606-11.068 6.5l-10.613 5.262-1.944-2.387c-1.069-1.313-15.895-30.225-32.946-64.25-19.752-39.413-31.532-61.863-32.462-61.863-.93 0-12.53 22.071-31.933 60.75-32.407 64.606-33.83 67.278-35.796 67.2-.695-.029-5.671-2.293-11.058-5.032zm32.823-46.424c53.683-106.85 79.32-156.43 86.604-167.49 8.414-12.781 22.146-27.16 31.456-32.939 4.199-2.606 6.949-3.544 11.32-3.86 5.335-.386 6.046-.178 9.367 2.737 10.004 8.783 9.619 28.927-1.215 63.535-2.234 7.135-4.061 13.541-4.061 14.236 0 .695 2.755 2.654 6.123 4.354 7.034 3.55 7.646 3.306 9.56-3.815 8.35-31.092 10.896-47.122 10.024-63.132-.97-17.818-5.515-28.573-14.232-33.682-4.068-2.385-5.292-2.604-12.76-2.285-10.66.454-17.677 3.792-30.773 14.638-10.446 8.651-17.978 16.715-26.352 28.214-5.54 7.606-21.367 37.128-33.189 61.905-3.567 7.477-10.253 20.57-14.856 29.095s-20.74 40.25-35.86 70.5c-20.895 41.805-27.23 55.318-26.403 56.324 1.577 1.92 9.965 6.146 11.682 5.885.839-.128 10.9-19.003 23.567-44.216zm121.32 42.085c2.629-1.332 5.27-3.02 5.869-3.75.83-1.011-6.015-15.519-28.7-60.828-30.507-60.937-38.761-76.502-40.515-76.406-.55.03-2.766 3.435-4.924 7.566l-3.924 7.512 6.837 12.914c3.761 7.103 18.017 35.189 31.68 62.414s25.292 50.288 25.844 51.25c1.311 2.287 2.133 2.216 7.833-.672zM61.03 124.991c3.284-1.658 5.971-3.583 5.971-4.277 0-.695-1.827-7.101-4.06-14.236-5.649-18.043-8.11-30.364-8.288-41.472-.182-11.421 1.724-17.366 7.072-22.062 3.32-2.916 4.032-3.124 9.367-2.738 7.643.553 14.12 4.609 26.035 16.3 11.496 11.282 20.85 25.319 34.148 51.249 5.43 10.588 10.433 19.25 11.118 19.25s3.012-3.343 5.17-7.428l3.926-7.427-9.926-19.322c-5.459-10.627-11.13-20.897-12.602-22.822s-5.236-6.963-8.365-11.196c-9.38-12.687-27.416-28.427-38.594-33.68-4.151-1.95-7.52-2.675-13.738-2.956-7.463-.338-8.661-.125-12.738 2.264-8.717 5.109-13.261 15.864-14.232 33.683-.867 15.924 1.93 33.542 9.985 62.885 1.232 4.488 2.42 7 3.31 7 .258 0 3.156-1.356 6.44-3.014z"
      fill="#0b0809"
    />
  </svg>
);

export default CandyCaneSvg;
