



var app = new Vue({
    el: '#app',
    data: {
        allBusiness: [
            {
                "name": "70 Chinese and Sushi",
                "business_id": "bmcZnH1UAAB2iO_R2PFrnw"
            },
            {
                "name": "A Panda Buffet",
                "business_id": "1qw65j15MqKqYkljH_iSyA"
            },
            {
                "name": "A Sakura",
                "business_id": "Q6_YIK0yUI8HEgqrOIE-1Q"
            },
            {
                "name": "A-Wok Restaurant",
                "business_id": "fZfoi-VMMcv9Uc4QYgbOHw"
            },
            {
                "name": "A8 China",
                "business_id": "7OKQ4ENVfPfxtDqFOG7x0g"
            },
            {
                "name": "Amazing Wok",
                "business_id": "fjE-jiwnTQysz-rLl6YMQg"
            },
            {
                "name": "Amazing Wok II",
                "business_id": "cxq_iu2Zl5jm6qLGfff5eA"
            },
            {
                "name": "AnSun",
                "business_id": "exx_UjNFHW2uPI1ZT7JFNA"
            },
            {
                "name": "Aristo Bistro",
                "business_id": "0I0yATfnNQJB-A-IPGgqDA"
            },
            {
                "name": "Aseoma",
                "business_id": "TpLbrBsHSej6Snb6LXDYxg"
            },
            {
                "name": "Asia Court",
                "business_id": "tHxs9U0YGxK7Pule96tDBQ"
            },
            {
                "name": "Asia Express",
                "business_id": "ffUCy7Gd8Gr28oK5mHOjsw"
            },
            {
                "name": "Asia Garden",
                "business_id": "kF1Rr2bMPujucUihlitT2g"
            },
            {
                "name": "Asia Tea House",
                "business_id": "K6AKMjAdCSe8xllsbyeL9Q"
            },
            {
                "name": "Asian Bistro",
                "business_id": "7XUDdyFFriUkoSTGBYp1ag"
            },
            {
                "name": "Asian Cafe",
                "business_id": "eW6HLU-M3xJOpGyKLrWxUg"
            },
            {
                "name": "Asian Cafe",
                "business_id": "kIaqY45GaVX136dXomREcg"
            },
            {
                "name": "Asian Chao",
                "business_id": "XuxMAIKquXNe6fy0-HmZ8A"
            },
            {
                "name": "Asian Cuisine",
                "business_id": "uno5w5Zkhwn-yFkJgFuYOw"
            },
            {
                "name": "Asian Express",
                "business_id": "sRUesAB_yPZzzqMtjrwFsA"
            },
            {
                "name": "Asian Garden",
                "business_id": "qAzOcHnWerREl678su-p0A"
            },
            {
                "name": "Asian Garden",
                "business_id": "m6AvIcsMjTnoMqWywpEBqQ"
            },
            {
                "name": "Asian Garden",
                "business_id": "oVYRkSsSYWyBMKP_AqUtkw"
            },
            {
                "name": "Asian Grill",
                "business_id": "dxkchxJR7biaqK1qUSxG8A"
            },
            {
                "name": "Asian House",
                "business_id": "-ORqiS4L-8pq3dLsUazXTg"
            },
            {
                "name": "Asian House",
                "business_id": "rLJsrXyY61bouCfH58PKIA"
            },
            {
                "name": "Asian House",
                "business_id": "FYWmowvbtNvXMUsWgMiwaQ"
            },
            {
                "name": "Asian Kitchen",
                "business_id": "LG6vpg5Qx_DstY2aT8-O4Q"
            },
            {
                "name": "Asian Star",
                "business_id": "php_sWMWyXs7Qi5UyTUrLg"
            },
            {
                "name": "Asian Sweet Bakery",
                "business_id": "kVXyz0mYd7NaGuGdM_VMeQ"
            },
            {
                "name": "Asian Taste Restaurant",
                "business_id": "-XH3-e3jDVdjHJq7GfNY7w"
            },
            {
                "name": "Asian Wok Chinese Restaurant",
                "business_id": "OiR6kP_mAD47vKU1WiPshg"
            },
            {
                "name": "Auntie Lee's Chinese Kitchen",
                "business_id": "mvhokWwVKgfE-koLlc4VEw"
            },
            {
                "name": "Azan Wok",
                "business_id": "oaTbZh8B-IVFEwbzJcIOBg"
            },
            {
                "name": "Bahn Thai Restaurant",
                "business_id": "cCBySJPR4i7WFfEt8gjArg"
            },
            {
                "name": "Bai Ling Chinese Restaurant",
                "business_id": "ZWbJlxV7sdxBBgyw_-4vVg"
            },
            {
                "name": "Bamboo Garden",
                "business_id": "v8jZKf_YN7ayVy6ksyoiKg"
            },
            {
                "name": "Bamboo Republic Asian Cuisine",
                "business_id": "EbxaQO95C7PUNTmokE70XA"
            },
            {
                "name": "Bangkok Thai Restaurant",
                "business_id": "rPshoySU7Xfafoi3S0KDfg"
            },
            {
                "name": "Bean Curd Chinese Restaurant",
                "business_id": "JEqM8xXhKumU5AfhmsiD8w"
            },
            {
                "name": "Beijing Garden",
                "business_id": "WuxgvHDQ1aMIaAQ_1ciOXg"
            },
            {
                "name": "Benichopsticks Restaurant",
                "business_id": "i4CF-bIEfNeYoQ87klS78Q"
            },
            {
                "name": "Best Wok",
                "business_id": "Bfh_ON-LQUcJerjcDF5KNA"
            },
            {
                "name": "Best Wok Chinese",
                "business_id": "XhMfL-6lt-prYyC9Lp02gg"
            },
            {
                "name": "Blue Ginger Asian Bistro",
                "business_id": "mpG1R1ktTI3x1twNBsGvXQ"
            },
            {
                "name": "Blue Jade",
                "business_id": "jjBTBObnHrY87qQIMybjzQ"
            },
            {
                "name": "Bo Bo China",
                "business_id": "EVkytEhlC1nswqmgrHdviw"
            },
            {
                "name": "Bo Loong",
                "business_id": "USRXU4ASBAFSKhlk-KVrCw"
            },
            {
                "name": "Buffet House",
                "business_id": "uaZYhzg1jcmTrRIeNqHISA"
            },
            {
                "name": "C-U LaLa Noodle",
                "business_id": "3BkMnrNVkG_szOP0wQlX5A"
            },
            {
                "name": "CHANG HUA GARDEN",
                "business_id": "J8PbfZbU7XTs-h55ezuQcQ"
            },
            {
                "name": "Castle Place Chinese Restaurant",
                "business_id": "_VYUU5HPLYasd-xdKLimNA"
            },
            {
                "name": "Chai's Pittsburgh Fusion",
                "business_id": "S1mm3JFYmuewmKfUK8M8iw"
            },
            {
                "name": "Chan An Restaurant",
                "business_id": "gz87Wa7QUZ3gNlgE9NVPAA"
            },
            {
                "name": "Chan An Restaurant",
                "business_id": "N9JASBwB9kWtK0_EjTa1nw"
            },
            {
                "name": "Chan's Tea House",
                "business_id": "qh1GCWP_2TKxevp3ZeMxag"
            },
            {
                "name": "Chang Jiang",
                "business_id": "5Y-p9QJLrg2P0I8RjJ9TTQ"
            },
            {
                "name": "Chang Jiang",
                "business_id": "U6ure4FjwC9lOKmlZw6gTQ"
            },
            {
                "name": "Chang Jiang",
                "business_id": "35AWV2l8s2DbBxKbexPU7A"
            },
            {
                "name": "Chang Jiang",
                "business_id": "asAHqgKQtCWiBbC3XriSIQ"
            },
            {
                "name": "Chang Jiang",
                "business_id": "Q6Kp7sp3GXykifV2TjomZQ"
            },
            {
                "name": "Chang Jiang Chinese Kitchen",
                "business_id": "aC9D8lFr5k9pWU0IBdEb0g"
            },
            {
                "name": "Chang Jiang Chinese Restaurant",
                "business_id": "hSfsnEa9q1Xx-0lAYDTLGw"
            },
            {
                "name": "Chang Jiang Restaurant",
                "business_id": "E4HlcOykIxIDiJyUKO-eIg"
            },
            {
                "name": "Chang Jiang Restaurant",
                "business_id": "TTVXY5vOJDqC0_Je8UhK8A"
            },
            {
                "name": "Chef Chen Chinese Resturant",
                "business_id": "ui4fyPJ_HRm4HPkEmIHQOA"
            },
            {
                "name": "Chen's Dumpling House",
                "business_id": "xMn3YvKFLqpBab0icUou1g"
            },
            {
                "name": "Chen's Garden",
                "business_id": "6PPoODoXUyMULipVWnpJWw"
            },
            {
                "name": "Chen's Wok",
                "business_id": "XaTts7L8g57_odPEFuwkOw"
            },
            {
                "name": "Chengdu Gourmet",
                "business_id": "S6dARuOrrOXd4xSiTHti8g"
            },
            {
                "name": "Chili King",
                "business_id": "iiEjVLb4JDLE2xl8YGR-Gw"
            },
            {
                "name": "Chin's Asia Fresh",
                "business_id": "8gVq0xCXVeAAS3-nsifAgQ"
            },
            {
                "name": "Chin's Asia Fresh",
                "business_id": "pyZkGdnTwpRh5tFWfdmQEg"
            },
            {
                "name": "Chin's Pagoda Chinese & American Restaurant",
                "business_id": "SWDEdiv_v1QppobT1YnEPA"
            },
            {
                "name": "China Bay",
                "business_id": "5L-dBWit8Y90bnP3nsAauQ"
            },
            {
                "name": "China Bay",
                "business_id": "PhNdyQTtZjOQ1bqoT4S3oA"
            },
            {
                "name": "China Bistro",
                "business_id": "_-Z2zPiuhw3V2RixPZ89Cw"
            },
            {
                "name": "China Buffet",
                "business_id": "EGJb8zZPlAfRzj9rg2KwqQ"
            },
            {
                "name": "China Buffet",
                "business_id": "jhNV1xO2q1_61REv2YQAtg"
            },
            {
                "name": "China Buffet",
                "business_id": "L4GzMZqY4L_5GPC22pIM0Q"
            },
            {
                "name": "China Buffet",
                "business_id": "caWUE0ItqsG51OaBVlr4Eg"
            },
            {
                "name": "China Buffet",
                "business_id": "MBK1Ew_P30AD6hFpKHqX6w"
            },
            {
                "name": "China Buffet",
                "business_id": "AZ_iSVHQdBiCTnMolLTg3Q"
            },
            {
                "name": "China Buffet King",
                "business_id": "0It4d0eFPJ5UnQqe6g2Z3w"
            },
            {
                "name": "China Cafe",
                "business_id": "CZzRtq0HQKwbBaJJi-Xpnw"
            },
            {
                "name": "China Cafe",
                "business_id": "vAyQDNs9lu_8hT20lleGqg"
            },
            {
                "name": "China Cafe",
                "business_id": "LTF14u6dfIyJQ41P-FooiA"
            },
            {
                "name": "China Chef",
                "business_id": "RNkVt3T_3DQjXbXTM2DIjg"
            },
            {
                "name": "China Chef",
                "business_id": "m5t6Ork5uMHRvIlCmP6ULQ"
            },
            {
                "name": "China Chef",
                "business_id": "Kxlt3ZNmTzbxRFYelWAmKA"
            },
            {
                "name": "China Chef",
                "business_id": "0QCmxnnuhv-imac5uDeVHw"
            },
            {
                "name": "China City",
                "business_id": "tZB8K6RP7BPou0X2tZ-hDg"
            },
            {
                "name": "China City",
                "business_id": "kS_xANADJil_EGX6gmMa5A"
            },
            {
                "name": "China City",
                "business_id": "Uo088VV_nzeTBJEbCCUSFw"
            },
            {
                "name": "China Delight",
                "business_id": "pxYqUpCz1WQU5M-1tW3-Lw"
            },
            {
                "name": "China Dragon",
                "business_id": "y3vpN6sfipzEpn9Tt5wuog"
            },
            {
                "name": "China Dragon",
                "business_id": "OPIX1wTOll0aZT08Wr6sDw"
            },
            {
                "name": "China Dragon",
                "business_id": "M5rnBQaFtjYTn3T9NIZwcA"
            },
            {
                "name": "China Dragon",
                "business_id": "WPt9WEMSgDER4QYSp8RLpw"
            },
            {
                "name": "China Dragon Buffet",
                "business_id": "fN3_baB8ixm9aG-Hrpd6Lw"
            },
            {
                "name": "China Dragon Restaurant",
                "business_id": "cIoB6iinl48KDGCVwtCHoA"
            },
            {
                "name": "China Express",
                "business_id": "4rSHsXO4ozQoD0hoPCDatQ"
            },
            {
                "name": "China Express",
                "business_id": "baedk40VCeup34ltsDsAHA"
            },
            {
                "name": "China Express",
                "business_id": "loXkZgAd70KMjP8ISCnZPQ"
            },
            {
                "name": "China Express",
                "business_id": "4HZdHS6I0XyNVRvvXC-G1A"
            },
            {
                "name": "China Express",
                "business_id": "nrGop3jH9s3cq-RTiEWOGQ"
            },
            {
                "name": "China Fortune",
                "business_id": "XBVp2d7UVJRxc70QcjvKIA"
            },
            {
                "name": "China Garden",
                "business_id": "xONNOYgT5BBJj_EVJBMghQ"
            },
            {
                "name": "China Garden",
                "business_id": "JQ4tpUOOwlrZXSyW4Wlyaw"
            },
            {
                "name": "China Garden",
                "business_id": "h0kDxnRpBXyJ1v17uSDnzw"
            },
            {
                "name": "China Garden",
                "business_id": "XKOAi4J47i-YEhhHfKkPRQ"
            },
            {
                "name": "China Garden",
                "business_id": "-UjCvAsvBOr19y8lqPueiQ"
            },
            {
                "name": "China Garden",
                "business_id": "XODz0rilGYo6_xd5e7isOw"
            },
            {
                "name": "China Garden Chinese Restaurant",
                "business_id": "vV1AB2vk-7JqDGyS1v4vvA"
            },
            {
                "name": "China Gate",
                "business_id": "Zs8LPufciU-jDpbAVFqKcA"
            },
            {
                "name": "China Gate",
                "business_id": "tyCIs0pyyw36apAXdR26WQ"
            },
            {
                "name": "China Gourmet",
                "business_id": "dxh4eQyUPxoD0uupjuqjug"
            },
            {
                "name": "China House",
                "business_id": "Ks7EuyQVI2JEif4Xp70MmA"
            },
            {
                "name": "China House",
                "business_id": "PXKjfPxjJSykV3vN8GAoBQ"
            },
            {
                "name": "China House",
                "business_id": "w65C613GYsoSzk9HGY3Y8w"
            },
            {
                "name": "China House",
                "business_id": "Rmdv8qikuGCecgRGVPWMQA"
            },
            {
                "name": "China House",
                "business_id": "gGeC3-QX-ZH1kxnpmUwQ9A"
            },
            {
                "name": "China House",
                "business_id": "R-nmyxEGu4fYGJ2JFbMwlQ"
            },
            {
                "name": "China House",
                "business_id": "WdtmkT5lWzW167T3rBxKsw"
            },
            {
                "name": "China House",
                "business_id": "GV5jI4xbBLNiqujLIFrcuw"
            },
            {
                "name": "China House",
                "business_id": "Hiqb7coNwQgEoAR9bn5XMg"
            },
            {
                "name": "China House",
                "business_id": "nb3v4cQdZAYfbcw6eAD4Dg"
            },
            {
                "name": "China House",
                "business_id": "-06-Fdi30wJx-JA8P7CAng"
            },
            {
                "name": "China House",
                "business_id": "oK_uwtOectm906rpUtHiug"
            },
            {
                "name": "China House",
                "business_id": "7fiRVsawDX0vCpoMTbbxcQ"
            },
            {
                "name": "China House",
                "business_id": "i17-RGooGWIad0y5YtaBtQ"
            },
            {
                "name": "China House Chinese Restaurant",
                "business_id": "q7jC-6uH7IieKu8PcT2gBA"
            },
            {
                "name": "China House II",
                "business_id": "YZItTPlVWeq13bfAJtT2-g"
            },
            {
                "name": "China Ichiban",
                "business_id": "bFlP7uApDamdiVHwX8OwfA"
            },
            {
                "name": "China Inn",
                "business_id": "GfYzz2Dnnn0CqeDqROAKTQ"
            },
            {
                "name": "China Jade",
                "business_id": "CuIPocteo1F3LEn1OqUoHg"
            },
            {
                "name": "China King",
                "business_id": "4wzfwVrijdT--mWTESjw9g"
            },
            {
                "name": "China King",
                "business_id": "CQJGl8n0wqL8WSEsG_yqDg"
            },
            {
                "name": "China King",
                "business_id": "Bv1AGJ3p_X35tqUcVDrpHg"
            },
            {
                "name": "China King",
                "business_id": "HHGuAjkU9gQyxpwTZAJ_aQ"
            },
            {
                "name": "China King",
                "business_id": "EKQiKd7EMZjsa4JokFaeAg"
            },
            {
                "name": "China King",
                "business_id": "5NpmXRTEpi4ZOEK6LrYrGw"
            },
            {
                "name": "China King 1",
                "business_id": "zRBDq7hLQevQXeZAGRkRCA"
            },
            {
                "name": "China King Chinese Restaurant",
                "business_id": "UzW_6PaLFzPjP7_2Czk3Wg"
            },
            {
                "name": "China Kitchen",
                "business_id": "5YUoTimGDPbbmRfw6SJgTQ"
            },
            {
                "name": "China Kitchen",
                "business_id": "VKkK2Kn4wlF9ksUubH9M3A"
            },
            {
                "name": "China Kitchen II",
                "business_id": "CvP516pjOdcJJkaMjl8rPw"
            },
            {
                "name": "China Lin",
                "business_id": "toc31C-Qy2smSq0A7Q8FgA"
            },
            {
                "name": "China Lobster",
                "business_id": "AB6xAAxRRVS8tJgbW1aphw"
            },
            {
                "name": "China Lu",
                "business_id": "IJGce25T9M_xv9wG2F0Odg"
            },
            {
                "name": "China Max",
                "business_id": "UslSiDSUTCaq62FMpWK6Lw"
            },
            {
                "name": "China Max",
                "business_id": "fy5ZE8oCtEw5Jiu-HjTE_A"
            },
            {
                "name": "China Moon",
                "business_id": "RN-fX-LiwUm46a6G_r1xSw"
            },
            {
                "name": "China Mountain I",
                "business_id": "CxV9DJCxc04_xkDRSrfgFA"
            },
            {
                "name": "China Mountain II",
                "business_id": "OmP2SCE411tncZ8umlP0Ag"
            },
            {
                "name": "China Mountain III",
                "business_id": "Tn8NcJoZ44WspXKuzsDkAQ"
            },
            {
                "name": "China One",
                "business_id": "wrV2yRrSAoVeXpvR7n-czA"
            },
            {
                "name": "China One",
                "business_id": "o1TZ62VQ8RBoYv2B8v9UUg"
            },
            {
                "name": "China One Buffet",
                "business_id": "fsZXGdbPWCW7LYUoedu0aA"
            },
            {
                "name": "China One West",
                "business_id": "e-finkL51hroOJ0GZ8jcXA"
            },
            {
                "name": "China Palace",
                "business_id": "egxK8E9T6MWLxJyD_iCIVQ"
            },
            {
                "name": "China Palace",
                "business_id": "gTRTzLhbl2uDd_JvB4PsyQ"
            },
            {
                "name": "China Palace",
                "business_id": "9XtyBTgenMERfl4hDgnDwA"
            },
            {
                "name": "China Palace",
                "business_id": "f2FfutZhb4F-m1Ob0EdYaw"
            },
            {
                "name": "China Palace of Wexford",
                "business_id": "swfdlAMXwV8OjYD5nkA6nQ"
            },
            {
                "name": "China Park",
                "business_id": "yauL5BpUTGukejbJskXl_g"
            },
            {
                "name": "China Renaissance",
                "business_id": "6tY0tn39Mb8FCLYBAXXOUw"
            },
            {
                "name": "China Sea",
                "business_id": "Vc8sXKEdO9yVxbRlwBFHKQ"
            },
            {
                "name": "China Sea",
                "business_id": "lQMZ2Rd0jGf1ZpekZpr1MA"
            },
            {
                "name": "China Sea Chinese Restaurant",
                "business_id": "e7oOEdxosDy5NG_XxdXVAg"
            },
            {
                "name": "China Sea Express",
                "business_id": "pW-fOxuaWBkIhum5NANx2w"
            },
            {
                "name": "China Sea by CSU",
                "business_id": "tIby_wfzpZ5QH02IWFNogg"
            },
            {
                "name": "China Star",
                "business_id": "8AAQha5aPcqR4ml_U6ZOlg"
            },
            {
                "name": "China Star",
                "business_id": "BT8bk6rOQ4kj8TD-hfepGQ"
            },
            {
                "name": "China Star",
                "business_id": "jDehhKtVZa62k32WHbnc2A"
            },
            {
                "name": "China Star",
                "business_id": "SJ08uawNJuzBOUPoLRVs3g"
            },
            {
                "name": "China Star",
                "business_id": "OZhRvcJ8WjnvRaRQVirD6w"
            },
            {
                "name": "China Star",
                "business_id": "Ucph9MH577u6j0zPK93amw"
            },
            {
                "name": "China Star",
                "business_id": "gDQlaDRAjsCx2p_p6oJLjw"
            },
            {
                "name": "China Star",
                "business_id": "L-aDFoHDcVG1ImCoG361jw"
            },
            {
                "name": "China Star",
                "business_id": "22SabxkOHG2gD4VuVlQR5Q"
            },
            {
                "name": "China Star Restaurant",
                "business_id": "MNo2l4eFOOJqCo8PX0W12A"
            },
            {
                "name": "China Taste",
                "business_id": "O5MzWfMWDeEwkzNVeKdCfg"
            },
            {
                "name": "China Town 1",
                "business_id": "VBxKOEdjg7ryuA2Ni080rA"
            },
            {
                "name": "China Town II",
                "business_id": "e_W6Q-qOHcUR5ZKrwvC2qw"
            },
            {
                "name": "China Village",
                "business_id": "5E37qENVklkwAMHmIwc_IA"
            },
            {
                "name": "China Wok",
                "business_id": "gxvSB3hEIW2EfTtUu77rZg"
            },
            {
                "name": "China Wok",
                "business_id": "1SJiW_mW6IlEe7hqMTnjYg"
            },
            {
                "name": "China Wok",
                "business_id": "-cnAmACYQpwRyfjuZHay3w"
            },
            {
                "name": "China Wok",
                "business_id": "ndq4rJcFLMbMGU_gK5u79Q"
            },
            {
                "name": "China Wok",
                "business_id": "VxwcmqZ56tzPr7ZbLxlhTw"
            },
            {
                "name": "China Wok",
                "business_id": "imBVeP4aA-aLTdPD-t8_WQ"
            },
            {
                "name": "China Wok",
                "business_id": "G-OMrmKRaSumc73LaSbhPA"
            },
            {
                "name": "China Wok",
                "business_id": "XaqWUocr0MlYVi5yusjk0Q"
            },
            {
                "name": "China Wok",
                "business_id": "aqrC9UyFD6IL19-yRqqQjA"
            },
            {
                "name": "China Wok Chinese Restaurant",
                "business_id": "qd1QvLRMJMPRQIdhyWmhRg"
            },
            {
                "name": "ChinaTown Buffet",
                "business_id": "mofOjB6flg-eAWOFbOkHfQ"
            },
            {
                "name": "Chinatown Inn",
                "business_id": "LbeJgPgKKHw5qH0f02NHEQ"
            },
            {
                "name": "Chop Sticks",
                "business_id": "u7fc6_zgJEnEq3rEkC1gBg"
            },
            {
                "name": "Chopstick Chinese Restaurant",
                "business_id": "7sz9Rw1dbIEfLy-L9qB3Tw"
            },
            {
                "name": "Chopstick House",
                "business_id": "vYRxMRpdUES85ZEpiQwjgg"
            },
            {
                "name": "Chopsticks Express",
                "business_id": "AV72aytrW-z787seJAku2w"
            },
            {
                "name": "Chopstix",
                "business_id": "vsoEZauF4lrADIqCYXySFQ"
            },
            {
                "name": "Chopstix",
                "business_id": "DId2r0a4C2ixCbuLApxx8g"
            },
            {
                "name": "City Buffet & Hibachi Grill",
                "business_id": "5jSwodZ2cLIgD0SLGXYbeg"
            },
            {
                "name": "Classic Chinese Cuisine",
                "business_id": "iDHWqYdaTd5cHjppBdg5Rw"
            },
            {
                "name": "Cool Ice Taipei Kitchen",
                "business_id": "KF1ngA96RBiRM5h8V7IQ2g"
            },
            {
                "name": "Cravings",
                "business_id": "gnqHyA6gY2-m9S-FKt6Xqw"
            },
            {
                "name": "Crazy Buffet",
                "business_id": "pA3ltu4j31uatVu0_Gu1PQ"
            },
            {
                "name": "Crop Sticks",
                "business_id": "FeigEbRVs3d_WoMVUhIT7g"
            },
            {
                "name": "Dagu Rice Noodle",
                "business_id": "xDnkfWCyaUdR6iMoxnuWyg"
            },
            {
                "name": "Dean's House",
                "business_id": "dRT7tLyakasIjJ4B0Fm92Q"
            },
            {
                "name": "Don Don Chinese Restaurant",
                "business_id": "Wqdws1zeQYTzV_7jq1a0hw"
            },
            {
                "name": "Double 10",
                "business_id": "DCab_cz7nDDW-IPsnKGb_A"
            },
            {
                "name": "Double 10 Mini Hot Pot",
                "business_id": "QlAPX3c0Vm2dU_w3puIAIw"
            },
            {
                "name": "Double Dragon",
                "business_id": "XOjlj7fVauWibKrhXMS-uQ"
            },
            {
                "name": "Double Dragon Buffet",
                "business_id": "956ZfpypyxLLkRmlaHWGkA"
            },
            {
                "name": "Dragon",
                "business_id": "h9O1Q4kEklvYdwVsffTpMA"
            },
            {
                "name": "Dragon Chinese Restaurant",
                "business_id": "7rLoG6F6kJYE_gPppl8_5A"
            },
            {
                "name": "Dragon City",
                "business_id": "8B4tanBgBpccBUWSEH4yLA"
            },
            {
                "name": "Dragon Garden Restaurant",
                "business_id": "6lgkTtACpJR5Kijkc050KQ"
            },
            {
                "name": "Dragon Gate",
                "business_id": "2F6dAex41iqsoxjSX4xAZA"
            },
            {
                "name": "Dragon I",
                "business_id": "dazGlP4Rk4nxlyMtlvkpvA"
            },
            {
                "name": "Dragon Light",
                "business_id": "bsme1TUoEQt5EDF7O6HBrg"
            },
            {
                "name": "Dragon Palace",
                "business_id": "Msq2CBPFaY7Fe7h7R20fOA"
            },
            {
                "name": "Dragon Restaurant",
                "business_id": "KPtD6L5GpfbNV5stjyIK6Q"
            },
            {
                "name": "Dragon Town",
                "business_id": "vGCAzbPIcZNkqNkKBbh4Ow"
            },
            {
                "name": "Dumpling Noodle BBQ",
                "business_id": "zYb8dR4tsolqeJRj8x4tdw"
            },
            {
                "name": "DumplingHaus",
                "business_id": "VfWX3UCKvUnVktdOuR8TwA"
            },
            {
                "name": "Dynasty Chinese Restaurant",
                "business_id": "6T6EpsPG7SXZ0qDUvp34wg"
            },
            {
                "name": "E 30th Street Cafe",
                "business_id": "zKJ4KcZAfTNBIM7OvkVv3A"
            },
            {
                "name": "East China",
                "business_id": "R_Z2wQ5dSBihyGVwDFKaeg"
            },
            {
                "name": "East China",
                "business_id": "Aqhy2ZYpEeJ61aIJH_iCxw"
            },
            {
                "name": "Eastern Buffet",
                "business_id": "BSjJIFtg1BkLTCYJYzy7Og"
            },
            {
                "name": "Eastern Palace",
                "business_id": "GqBP4UM_z2BAJz_ZUzdecA"
            },
            {
                "name": "Edo Asian cuisine",
                "business_id": "vn5f16PcHU-feucWgK7r1g"
            },
            {
                "name": "Emperor's Palace",
                "business_id": "a58P2BPCCbQgDMbEoLfWzg"
            },
            {
                "name": "Empire Chinese Restaurant",
                "business_id": "LV6nlFQTt-KFdtapmsSzUw"
            },
            {
                "name": "Empire Chinese Restaurant",
                "business_id": "zTGxLMOd9crAz0XNzqrcrA"
            },
            {
                "name": "Empire Palace Asian Restaurant and Bar",
                "business_id": "F1vdFYr7P4Xb3uAQ2AYgzQ"
            },
            {
                "name": "Empire Wok Chinese Carry Out",
                "business_id": "jIujTHt4Mr-ygwpBDGHmFg"
            },
            {
                "name": "Empress Court",
                "business_id": "LRLc0c1pQwa9VSG7EpZRtg"
            },
            {
                "name": "Evergreen Chinese Buffet",
                "business_id": "DA3Dzic8NAJ0LYnYZG9nyQ"
            },
            {
                "name": "Everyday Noodles",
                "business_id": "hcFSc0OHgZJybnjQBrL_8Q"
            },
            {
                "name": "Evo Cafe",
                "business_id": "OyBStpjF5e_iRCMXflFasQ"
            },
            {
                "name": "Faith Sung Inc Dba Asian Kitchen",
                "business_id": "P9ASoX1gV30Sw7_dWvrv5Q"
            },
            {
                "name": "First Wok",
                "business_id": "ejdBoVvEdn5fdycuJRen8Q"
            },
            {
                "name": "First Wok",
                "business_id": "pJU2t-6Hd_zUosX1Aw4b0Q"
            },
            {
                "name": "Flaming Wok",
                "business_id": "aS4t4ee3xqQXgNHNxi9gAA"
            },
            {
                "name": "Flat Top Grill",
                "business_id": "ygjJmeiGoO--QpTqJ_kZjA"
            },
            {
                "name": "Foo Sing",
                "business_id": "xXGRRmCIf6t6Bn-NvxHYwA"
            },
            {
                "name": "Foo Sing Chinese Restaurant",
                "business_id": "_baq5LloRpwIxKLaRLOA1g"
            },
            {
                "name": "Food King",
                "business_id": "MFbTdZe4Aby_0UbWWsfl6Q"
            },
            {
                "name": "Forever Rosemary",
                "business_id": "o2UAUbXSNRrqleXtSMLniA"
            },
            {
                "name": "Fortune Star",
                "business_id": "Tz5a_AzxWx0gtIAlinr1Ww"
            },
            {
                "name": "Fortune Star Buffet & Grill",
                "business_id": "c98EjK4wKpKrGrdZibPq2g"
            },
            {
                "name": "Frankie's Wok",
                "business_id": "iH-BDuPiIV1Eag82oqXmAQ"
            },
            {
                "name": "Fu Lai Chinese Restaurant",
                "business_id": "odfX0wO7fOyqa8oobxh96w"
            },
            {
                "name": "Fu Sheng",
                "business_id": "qwkzD5_OjQ2eYv0EIKxV_g"
            },
            {
                "name": "Fugu",
                "business_id": "z9lOfnUorcbWR_xS0DSeHw"
            },
            {
                "name": "Fuji Buffet & Grill",
                "business_id": "dFywNDTZ1AnxhaEqxlA5Ug"
            },
            {
                "name": "Fuji Grill Buffet",
                "business_id": "tw8I1hZdlGpwO2QaAIeQWg"
            },
            {
                "name": "Fun Buffet",
                "business_id": "7HVeDuuAy5NM5pdeZJ-lzg"
            },
            {
                "name": "Fun Buffet",
                "business_id": "_aX7bPzYQdrIVUJpG_-0zg"
            },
            {
                "name": "G & G Noodle Bar",
                "business_id": "bCa0CY4F74N5lCEVOquKkg"
            },
            {
                "name": "Garden Cafe",
                "business_id": "XgUlUmrktr2Um2gczYeYpg"
            },
            {
                "name": "General Tso's Chinese Food",
                "business_id": "4lHIz3Z-6lAICc_1wq25-A"
            },
            {
                "name": "Golden Bowl",
                "business_id": "mdNbptkRKH1Jj2iRqBgq_g"
            },
            {
                "name": "Golden Crown Chinese Restaurant",
                "business_id": "GKmbGnQ2WmlU7ntVPI4mYA"
            },
            {
                "name": "Golden Crown Chinese Restaurant",
                "business_id": "471g2XO27o_zF2ZYrwvIeQ"
            },
            {
                "name": "Golden Crown Chinese-American Restaurant",
                "business_id": "XErOb3obTwM_Kby23AIYfg"
            },
            {
                "name": "Golden Dragon",
                "business_id": "dHJ4PT5C9mr6QPs4o_DaSA"
            },
            {
                "name": "Golden Dragon",
                "business_id": "qbDaSyxDfUZNheucJym2Pg"
            },
            {
                "name": "Golden Dragon Chinese Restaurant",
                "business_id": "9X3XAKb51B4meUDC_NFnsA"
            },
            {
                "name": "Golden Dragon Chinese Restaurant",
                "business_id": "xVgBhNzlnSmNY5MwqgBrCQ"
            },
            {
                "name": "Golden Dragon Restaurant",
                "business_id": "7oS4RyfwnQ3n9fARzjsNNg"
            },
            {
                "name": "Golden Gate Chinese Express",
                "business_id": "xqVeSoyuWsKhQpWZjwiYSA"
            },
            {
                "name": "Golden Gate Chinese Restaurant",
                "business_id": "v_YaNPJbP1XKGG-R_vUZ1Q"
            },
            {
                "name": "Golden Gate Restaurant",
                "business_id": "dmiSOfKvwfjNHMQddKGG_Q"
            },
            {
                "name": "Golden Ginger",
                "business_id": "_P-N2rDIJ2kHTPstjUWByQ"
            },
            {
                "name": "Golden Harbor Authentic Chinese Cuisine",
                "business_id": "t_yiQnxUDdPPCN2z4QyezA"
            },
            {
                "name": "Golden Kitchen",
                "business_id": "W7KtVjq4R_5F5EwbCBENQw"
            },
            {
                "name": "Golden Lily",
                "business_id": "kJtijhRR8fl4QIrj-oxf9g"
            },
            {
                "name": "Golden Mountain Restaurant",
                "business_id": "8C65DwwnazwYB2z9naHyaw"
            },
            {
                "name": "Golden Palace",
                "business_id": "UEY70uNV3BxMbxjNmg0apg"
            },
            {
                "name": "Golden Palace",
                "business_id": "M-4dNFcnRJ0_hI357OLGhg"
            },
            {
                "name": "Golden Palace Buffet",
                "business_id": "74wRr6PP6lbaL1YzUcYGAA"
            },
            {
                "name": "Golden Palace Buffet",
                "business_id": "gFyntTks-Qd5CjDU8_2Kog"
            },
            {
                "name": "Golden Palace Chinese Restaurant",
                "business_id": "o5rtJcyJ6xje1PFj_rhRTA"
            },
            {
                "name": "Golden Place the Chinese Restaurant",
                "business_id": "hUtc2gE-UIcvoQ9tXUJMUA"
            },
            {
                "name": "Golden Sea",
                "business_id": "pFg0ZuTVVZMZpANZXI0LtA"
            },
            {
                "name": "Golden Star",
                "business_id": "FNf9Q2FnB9sI9kOMAgj0AQ"
            },
            {
                "name": "Golden Wok",
                "business_id": "QdganL5AW9E_fNoRVroLig"
            },
            {
                "name": "Golden Wok Inn",
                "business_id": "hMTzciZhfmugG2EVAPANcg"
            },
            {
                "name": "Good Fortune Asian Cuisine",
                "business_id": "D0CmKnqGOf_jaPgECFZcCw"
            },
            {
                "name": "Grand China",
                "business_id": "NI75svhUpw1u0ClzrPFPCQ"
            },
            {
                "name": "Grand China Buffet & Grill",
                "business_id": "mtUscPpaEpOpdBWDGXuNcA"
            },
            {
                "name": "Grand China Restaurant",
                "business_id": "khKH3drFrWAGPhCRUS0hkA"
            },
            {
                "name": "Grand China Restaurant",
                "business_id": "C16dsL_IEOb5UzRWYhxiKw"
            },
            {
                "name": "Great China",
                "business_id": "HNW4P0jAhXYRJ_op7OcWCw"
            },
            {
                "name": "Great China Buffet & Grill",
                "business_id": "9VU91bqavqmmi3gstjemzA"
            },
            {
                "name": "Great Garden",
                "business_id": "r7Ft2iBJ_dtUpf4YrHHM1Q"
            },
            {
                "name": "Great Taste Chinese Restaurant",
                "business_id": "ja7zjowr6ymsVglQXZZ6BA"
            },
            {
                "name": "Great Wall",
                "business_id": "Sq7BouKjTovLesy6qewv5A"
            },
            {
                "name": "Great Wall",
                "business_id": "5ZqybrqiTdbANn2yI3B3VA"
            },
            {
                "name": "Great Wall",
                "business_id": "hh6OnxhTmfoyLo4prSNwBQ"
            },
            {
                "name": "Great Wall",
                "business_id": "go623pgRx2nfIpsV4ePHXg"
            },
            {
                "name": "Great Wall China Buffet",
                "business_id": "bvTyaYHXupi1c5mbs65RyQ"
            },
            {
                "name": "Great Wall Chinese Cuisine",
                "business_id": "cPcUqzaNRtTLIq0E6LRqfg"
            },
            {
                "name": "Great Wall Chinese Food",
                "business_id": "_EGWxiD27k3ahcFpmbSjQg"
            },
            {
                "name": "Great Wall Chinese Restaurant",
                "business_id": "kt8gBE0TcSC_Srrxg98Mow"
            },
            {
                "name": "Great Wall Chinese Restaurant",
                "business_id": "hZAKEk_nNEIxd-IUkZlghA"
            },
            {
                "name": "Great Wall of China",
                "business_id": "ATrQfex3fY79YxWw2gsD-g"
            },
            {
                "name": "Greedys Restaurant",
                "business_id": "klWcP_4OVXLStd3VovuA1A"
            },
            {
                "name": "Green Bamboo",
                "business_id": "OHuo-yqHdtJMAnkNLyp34g"
            },
            {
                "name": "Green Bamboo",
                "business_id": "nVqOTTfDiu12xsQtFTO7_w"
            },
            {
                "name": "Green Garden",
                "business_id": "7LlND5b0bjWylNBNQ-oZMA"
            },
            {
                "name": "Green Jade",
                "business_id": "vVdY2qDO7dkUrU8LXYZ1uA"
            },
            {
                "name": "Green Lake",
                "business_id": "K0hjawODyinXeiHUlnn9VA"
            },
            {
                "name": "Hakka Wok",
                "business_id": "zs8FigAlH_rfYJ3FoCzMGw"
            },
            {
                "name": "Han Chinese Kabob & Grill",
                "business_id": "cXmlv2WBzuB6JLMhaCvLuQ"
            },
            {
                "name": "Happy Buddha Cafe",
                "business_id": "yBHltbm3DqNaKgBgTMpxsA"
            },
            {
                "name": "Happy Garden",
                "business_id": "YAhRuV3oRkwGk3Or9PJ3Ww"
            },
            {
                "name": "Happy Home Buffet",
                "business_id": "hh1ed5ZU4-6NupSvORCccw"
            },
            {
                "name": "Happy Wok",
                "business_id": "6_7_aSycZlRsfKENFiIi6g"
            },
            {
                "name": "Happy Wok",
                "business_id": "KLvpdtFYUi1I0LNsmIqeJw"
            },
            {
                "name": "Happy Wok",
                "business_id": "6Qpo9mVLl60gu-ajJvcBLQ"
            },
            {
                "name": "Hibachi 7",
                "business_id": "_O4GIYt8p1Op7ZnbCfD5yA"
            },
            {
                "name": "Hibachi To Go",
                "business_id": "FDl-B4kuvpAsY8QPgXwQAA"
            },
            {
                "name": "Hing Wong ",
                "business_id": "mTPC_emDlTlfwr5o8A9APw"
            },
            {
                "name": "Ho Wah",
                "business_id": "DtAND35Vc4dY7usrGtbR7w"
            },
            {
                "name": "Home of Gourmet Chinese & Thai Restaurant",
                "business_id": "njngMI0mhAGJ-kH0oo68Ow"
            },
            {
                "name": "Honey Moon Chinese Restaurant",
                "business_id": "0Z4__YJxeGnYcbx05Mfw_w"
            },
            {
                "name": "Honeymoon Chinese Restaurant",
                "business_id": "cUfSGsjKP7ma8FbFqTmZLA"
            },
            {
                "name": "Honeymoon Chinese Restaurant",
                "business_id": "yGdO0huBvnAhyEX7fZO7og"
            },
            {
                "name": "Hong Kong Buffet",
                "business_id": "y_Xi2V_0lGbCkRuiXLHUFA"
            },
            {
                "name": "Hong Kong Cafe",
                "business_id": "bLh4ysq5RsbzCNSjqHhwyw"
            },
            {
                "name": "Hong Kong Cafe West",
                "business_id": "3NmjKQJmPH7hcM0pp12DJQ"
            },
            {
                "name": "Hong Kong Express II",
                "business_id": "ZKBUoCqTpwMtmImz64DGyQ"
            },
            {
                "name": "Hong Kong King Buffet",
                "business_id": "yrwKibiXRrTUnGKj7io5ag"
            },
            {
                "name": "Hong Kong Kitchen",
                "business_id": "Vu6yNbKinh-54QT8i27LCw"
            },
            {
                "name": "Hong Kong Restaurant",
                "business_id": "dY_oOCE3fU50zs97SVRlrg"
            },
            {
                "name": "Hong Kong Station",
                "business_id": "j1i7s55PmOFzJC3l6O8PiA"
            },
            {
                "name": "Hong Kong Taste",
                "business_id": "NG5qynmV0kzxQMFJG7mhEw"
            },
            {
                "name": "Hong Kong Wok",
                "business_id": "70nmPKnAufzeKfRNVE0-Pg"
            },
            {
                "name": "Hong To Chinese Restaurant",
                "business_id": "w4MypAX8UIaJq-mhCZBq2A"
            },
            {
                "name": "Hop Hing",
                "business_id": "GeZiOW34ZL6jC9g-mq9QvA"
            },
            {
                "name": "Hop Hing Chinese Restaurant",
                "business_id": "WcHMfQZzs3G5UVY_zBB2FA"
            },
            {
                "name": "Hop Hing Chinese Restaurant",
                "business_id": "Xs_QOxzPZETqZ3MeNStvYA"
            },
            {
                "name": "Hot Wok Express",
                "business_id": "w9h-pTp1K6JMos-xzl3Wyw"
            },
            {
                "name": "House Gourmet",
                "business_id": "FuEtzgnqqsEr73A9mAbucw"
            },
            {
                "name": "House of Hunan",
                "business_id": "mF2EW3twSrFPmT_RVV1-Qg"
            },
            {
                "name": "House of Hunan",
                "business_id": "aURWnSm0BrHhp-0DSXFJww"
            },
            {
                "name": "House of Hunan",
                "business_id": "zG3GJiIrF01bwgP0tQdkZg"
            },
            {
                "name": "House of Lee Restaurant",
                "business_id": "QQSlx-l_cfwkVrNwjV_HgQ"
            },
            {
                "name": "House of Mei",
                "business_id": "oQg9JbKz7T1Zmm6GW1plrQ"
            },
            {
                "name": "House of Pearl Chinese Restaurant",
                "business_id": "d0_yLkH7u16tlcvvU-zIxw"
            },
            {
                "name": "How Lee",
                "business_id": "m5MaRXA1rNX1n1Kbr8-Sog"
            },
            {
                "name": "How Lee Chinese Food",
                "business_id": "BIqsItY0vyOshMpJ0I4cPg"
            },
            {
                "name": "HuHot Mongolian Grill",
                "business_id": "QeJAGJNbaqFuMusPTCoBMA"
            },
            {
                "name": "HuHot Mongolian Grill",
                "business_id": "t-LnJne10SHAWATKYdQdJQ"
            },
            {
                "name": "Hunan Bar",
                "business_id": "DXP3MbE8srQITLlAuS45aQ"
            },
            {
                "name": "Hunan Chester",
                "business_id": "8ZL4ed3Y8_F6AgPAYxgi2g"
            },
            {
                "name": "Hunan Chinese Restaurant",
                "business_id": "P3dBcZh_Hmr1wVWFZn2b-g"
            },
            {
                "name": "Hunan Coventry",
                "business_id": "sfd19Wo_7g2TwaoJmA9B8A"
            },
            {
                "name": "Hunan East",
                "business_id": "I2lDmQHDxnUKbEBJuJCW6w"
            },
            {
                "name": "Hunan Express",
                "business_id": "Jo5wAt5LYqPKYU1-D7-pfw"
            },
            {
                "name": "Hunan Inn",
                "business_id": "FOIQ49HJ6Y5fPl8QYr34XA"
            },
            {
                "name": "Hunan King",
                "business_id": "TaDp2EiNKqHhAp21xIoggg"
            },
            {
                "name": "Hunan King Chinese Restaurant",
                "business_id": "GZmpmQdY90Q4g-I5waNMGQ"
            },
            {
                "name": "Hunan King Restaurant",
                "business_id": "2Ql9YdeQstF79FLZyypDWQ"
            },
            {
                "name": "Hunan Kitchen",
                "business_id": "U8FC3Z_L_tHEUIvkwSSAXw"
            },
            {
                "name": "Hunan Lake Chinese Restaurant",
                "business_id": "xahtvkGLbwU___3GMqmWUw"
            },
            {
                "name": "Hunan One",
                "business_id": "pi1UM_U1hq-DwDYqQRK1Wg"
            },
            {
                "name": "Hunan Solon",
                "business_id": "ElqLoKM__uU7DcYzRnMpNw"
            },
            {
                "name": "Hunan Wok",
                "business_id": "tRrMljYqr48OjWoHDDkSoQ"
            },
            {
                "name": "Hunan Wok Chinese Restaurant",
                "business_id": "YU7KZJP0LsLcvU4eIHhtfw"
            },
            {
                "name": "Hunan Wok Chinese Takeout",
                "business_id": "Ef9crW61OYp2UJ0ysi3nEw"
            },
            {
                "name": "Hunan by the Falls",
                "business_id": "IpQG7s5l7ba5NxyzTxn7pg"
            },
            {
                "name": "Hunan of Lyndhurst",
                "business_id": "wlUiXdH1Cfj4do5kNxrOtw"
            },
            {
                "name": "Hunan of Stow",
                "business_id": "2lXYidovGbSa56cd07oHlg"
            },
            {
                "name": "Hunan's Palace",
                "business_id": "BY1_pf7FHUycHOwYEenDlQ"
            },
            {
                "name": "Hundred Flowers",
                "business_id": "sAhKuHKCKu9p8gy9vVsXnA"
            },
            {
                "name": "I Wok",
                "business_id": "z3hD4GX5gSJtuqNhN-o2cg"
            },
            {
                "name": "Ichiban Buffet",
                "business_id": "ldKrUirpZZ6JDnNwOwLpvw"
            },
            {
                "name": "Ichiban Sichuan",
                "business_id": "keQlXWfz2K7GukqaReVyow"
            },
            {
                "name": "Imperial Dragon",
                "business_id": "wNlpUnbCwAsMAu9Z1wc2nw"
            },
            {
                "name": "Imperial Garden",
                "business_id": "yAkaDc6MWX3dy8bnEcCrRQ"
            },
            {
                "name": "Imperial Garden Chinese Restaurant",
                "business_id": "r5qUfdiSL2_hHfdqXBJAMA"
            },
            {
                "name": "Imperial Wok",
                "business_id": "r5Ka92j1QFklGABmJKD03Q"
            },
            {
                "name": "Imperial Wok Chinese Restaurant",
                "business_id": "e9FftJq9v_porLZT7iSEhg"
            },
            {
                "name": "Inchin's Bamboo Garden",
                "business_id": "B5xWYgJDSN4RPPk4DlUajQ"
            },
            {
                "name": "Inchin's Bamboo Garden",
                "business_id": "uZZnIe0KJEpFlJlYedrQsg"
            },
            {
                "name": "Jackie Chen Wok",
                "business_id": "3Esl4FVI9Rzl_KSmIiMgaw"
            },
            {
                "name": "Jackie Chen's Asian Dinner",
                "business_id": "Y3pjXqh-kOdaQS3I-nQxQQ"
            },
            {
                "name": "Jackie Chen's Dragon Towers Chinese Restaurant",
                "business_id": "h0Wmyzb8q0bXbrqmWqVvfQ"
            },
            {
                "name": "Jade Chinese Kitchen",
                "business_id": "jTRKHyPmR5RwHVsqmhPTwg"
            },
            {
                "name": "Jade Garden",
                "business_id": "pTvL6Upfp91J1ryrCZpzgg"
            },
            {
                "name": "Jade Garden Restaurant",
                "business_id": "rloarAwOAiQWss9kdl41nQ"
            },
            {
                "name": "Jade Grille",
                "business_id": "7U73RqIg6JA0WThxWUV3uA"
            },
            {
                "name": "Jade Tree Chinese Cuisine",
                "business_id": "dF-_fcrNyk4iZ5Pc1mr-wA"
            },
            {
                "name": "Jerusalem Grill",
                "business_id": "ygpvIw60wGri7cr3CA9Ipw"
            },
            {
                "name": "Jimmy Tsang's Chinese Restaurant",
                "business_id": "dyaSQBKagPYylOJxsU8CMA"
            },
            {
                "name": "Jimmy Wans",
                "business_id": "XUDOc980cjB0PZvVS-T6Eg"
            },
            {
                "name": "Jin House",
                "business_id": "nDT0T3yW6G89vzdx4p_P4A"
            },
            {
                "name": "Joe's Kitchen",
                "business_id": "IqUKgj5hd3iUdQX80kw47g"
            },
            {
                "name": "John's Chinese & Sushi Restaurant",
                "business_id": "dWB0HT1nXQ2N8n3bvPKJuQ"
            },
            {
                "name": "Jumbo II Chinese Food",
                "business_id": "-hec2e0Kj9yIVfOQKoFG6Q"
            },
            {
                "name": "Ka Mei",
                "business_id": "QmNrHxN7UahtdliH_kAuUg"
            },
            {
                "name": "Kanda House",
                "business_id": "QiZCMGZEwVtg1ybOKybLhQ"
            },
            {
                "name": "Kar Hing",
                "business_id": "fZadRslL_7WwgZfVD6DYnw"
            },
            {
                "name": "Kasai Kogi Bar",
                "business_id": "25CzbDgm1MsT31NhA6KYog"
            },
            {
                "name": "Katana",
                "business_id": "VGxJbglGlx-a7Gdc55Q6jQ"
            },
            {
                "name": "Khoo's Garden",
                "business_id": "jhP9rUsV-KvgHu1n--7Q3w"
            },
            {
                "name": "King China Buffet",
                "business_id": "sCLXU9ehXMNsodcZqXKNZA"
            },
            {
                "name": "King Dragon",
                "business_id": "g74ClehJVU5h-29-Bx5xwQ"
            },
            {
                "name": "King Dragon",
                "business_id": "Ny7Y1Rlhwi5n4LHIpUA21g"
            },
            {
                "name": "King Fong",
                "business_id": "3_STYcEwVsieJPo0GWjxLw"
            },
            {
                "name": "King Wah",
                "business_id": "PgaHjsWV3whvHF1CHU1rZg"
            },
            {
                "name": "King Yuan",
                "business_id": "jKJr7aPdTZ5kiQw0g40yJQ"
            },
            {
                "name": "Kiyoshi",
                "business_id": "vEwazCciremwBgkRJgfXtw"
            },
            {
                "name": "Koi Sushi",
                "business_id": "jgh9iT5k7JxkeK9gu4VJAw"
            },
            {
                "name": "Kumo Japanese Seafood Buffet",
                "business_id": "iKzXIGPzUAuM2hs2RXEQFw"
            },
            {
                "name": "Kung Fu BBQ",
                "business_id": "xistlMeIIjG21z2SaWvfVQ"
            },
            {
                "name": "LJ Shanghai",
                "business_id": "tZpxk604kWWHsJKyirraZg"
            },
            {
                "name": "Lai Lai Wok",
                "business_id": "jKxES7iLV63H_PfyGVGIDw"
            },
            {
                "name": "Lao Sze Chuan Chinese Restaurant",
                "business_id": "wCB9mquz6W0ZuO5pPZXeDg"
            },
            {
                "name": "Laughing Buddha Bar",
                "business_id": "u540gB8nSBDZez-Kb76G9w"
            },
            {
                "name": "Leaf and Plate",
                "business_id": "s4M4QcJvxJ5IY0DQJo-sCA"
            },
            {
                "name": "Lee Asian Bistro",
                "business_id": "Ed5feP-TztmLtc4pRKDvNA"
            },
            {
                "name": "Lee's Garden",
                "business_id": "R-9gUTN8BJIDqGgzXEmq3Q"
            },
            {
                "name": "Li Garden Restaurant",
                "business_id": "nZRJu778hO66F11QUS53nA"
            },
            {
                "name": "Li Wah",
                "business_id": "ijY4C4ut4M9xg3QvK2R2pg"
            },
            {
                "name": "Liang's Hunan Restaurant",
                "business_id": "PN6YCsAdFHcHST9vPaxIuw"
            },
            {
                "name": "Lily Chinese Restaurant",
                "business_id": "tHsrPOEx-VY6a6urWWT0Xw"
            },
            {
                "name": "Lin Garden",
                "business_id": "RB0hIe4CjaYp4W0JAxw1yA"
            },
            {
                "name": "Lin Garden",
                "business_id": "fj7NnkbfHfEouJExa6MIhw"
            },
            {
                "name": "Lin's Garden",
                "business_id": "p9rvoRXzEf7Y2nTaqnotxw"
            },
            {
                "name": "Little Asia",
                "business_id": "X4CRPHvv-33kjxVJISZpUg"
            },
            {
                "name": "Little China",
                "business_id": "N0L1C5K9ViBD58vig5sahw"
            },
            {
                "name": "Little Hong Kong",
                "business_id": "bRy4yyU0XXcOJRX5tGQ_dg"
            },
            {
                "name": "Little Hong Kong",
                "business_id": "pGjtxXBq4tZcdKdgTU-Tww"
            },
            {
                "name": "Little Shanghai",
                "business_id": "Mge4KiFP09sWeKpbM6J65w"
            },
            {
                "name": "Long-Yun Restaurant",
                "business_id": "kYTzpbnpVDZVghVqZz7qCA"
            },
            {
                "name": "Lotus Garden",
                "business_id": "xUsLyzWQId6nXwNDVq08qQ"
            },
            {
                "name": "Lucky Chinese Express",
                "business_id": "Z-6QSR2lC-opp9l6HLYG_w"
            },
            {
                "name": "Lucky Chinese Restaurant",
                "business_id": "Ieaw3mw4GcPiF4PZkDYuFw"
            },
            {
                "name": "Lucky Dragon Chinese Restaurant",
                "business_id": "Oj_74Fa-VtFHXYTOWHMlsA"
            },
            {
                "name": "Lucky Wok",
                "business_id": "wHdjfx0WQAV9AhOlm46FMQ"
            },
            {
                "name": "Lulu's Noodles",
                "business_id": "xULATz2siGXOPia614mg2A"
            },
            {
                "name": "M&J Bistro",
                "business_id": "USninqjSauwQQ2T_FlkIMw"
            },
            {
                "name": "Mad Noodles",
                "business_id": "BrORoLCE5zVY6ekUb6omNA"
            },
            {
                "name": "Madison Cuisine",
                "business_id": "NlzU1RxfXaWF6ir-ZWfrLg"
            },
            {
                "name": "Magic Wok",
                "business_id": "MLwVTDhM2DOESvKGcfKCsg"
            },
            {
                "name": "Magic Wok",
                "business_id": "Q8NR1XY6BiVT6YCvkWPsBQ"
            },
            {
                "name": "Main Moon",
                "business_id": "nQ9603jcJ_Nk9WBxvSFH_Q"
            },
            {
                "name": "Main Moon",
                "business_id": "jwuR0AGCw_BaM8uEkKyVEw"
            },
            {
                "name": "Maing Wok Kitchen",
                "business_id": "M6BiGk76UgrYBM2sGPusUA"
            },
            {
                "name": "Malaxiangguo",
                "business_id": "VHtYVZN4-85odLn1T6Z_nA"
            },
            {
                "name": "Mama Fu's Asian House",
                "business_id": "z_zyOfFO-OIYgCR5hstyTw"
            },
            {
                "name": "Manchu Wok",
                "business_id": "EY37X3ESjNu14g9Xe4lyFQ"
            },
            {
                "name": "Manchu Wok",
                "business_id": "J4h3IP8lYBW82gr2SGeV2A"
            },
            {
                "name": "Mandarin",
                "business_id": "aAiDjaeWjiD8XxRBGMLKyw"
            },
            {
                "name": "Mandarin Express",
                "business_id": "pWXVTPjNeFK0cBRbr-Qq-A"
            },
            {
                "name": "Mandarin Gourmet",
                "business_id": "KzLjbXEDH1e1WrfzrrzZKw"
            },
            {
                "name": "Mandarin House Chinese Restaurant",
                "business_id": "JftoP9r6TT98v83hfY9RZw"
            },
            {
                "name": "Mandarin House Restaurant of China",
                "business_id": "B2UK8R5y-nSyTrCpzn_VFA"
            },
            {
                "name": "Mandarin Seafood Buffet",
                "business_id": "OqiGriMzxocWaIJR9tic_Q"
            },
            {
                "name": "Mandarin Wok",
                "business_id": "e88VWa9xdHmSFdMZne9eLQ"
            },
            {
                "name": "Mark Pi's",
                "business_id": "PNdjgI6mZYXKCTBKiVQMRg"
            },
            {
                "name": "Mark Pi's China Gate",
                "business_id": "BH0K6SxPnY3wTRB7tA27hQ"
            },
            {
                "name": "Master Wok",
                "business_id": "6OhgauonbNtqLRpXXn_nJA"
            },
            {
                "name": "Me Lyng Restaurant",
                "business_id": "MA465c4XL7_m9p_6_ztRsw"
            },
            {
                "name": "Mekong Restaurant",
                "business_id": "p2X4WdGMsi26t_6hN3Hz4w"
            },
            {
                "name": "Mid-Summer Lounge",
                "business_id": "a39B-BfbCipNkNH7vwCfug"
            },
            {
                "name": "Ming Cheng Restaurant",
                "business_id": "ImzivIgEc3XHpAYJyMQnxA"
            },
            {
                "name": "Ming Garden",
                "business_id": "ltqvLrYq9QjeQjQ1NlqLcA"
            },
            {
                "name": "Ming Home",
                "business_id": "0BEaW7yAystJ2OG-S0jv-Q"
            },
            {
                "name": "Ming Moon",
                "business_id": "JzV9vG0z6h2pllvUyTVxFw"
            },
            {
                "name": "Ming Moon",
                "business_id": "MJXN25eWW0U4E5aVUlAFCw"
            },
            {
                "name": "Ming Moon Chinese Restaurant",
                "business_id": "FqOjyZyVpIloRpoipoM1qw"
            },
            {
                "name": "Ming's Garden",
                "business_id": "vTqKk3FgwwLgfCcV7F1jmw"
            },
            {
                "name": "Miss Saigon88",
                "business_id": "7-Wlpm30PGCBIZtH2rOlew"
            },
            {
                "name": "Moonlight Truck Food",
                "business_id": "kxAQGy2ZpguB7zn8Nqgb_g"
            },
            {
                "name": "Moonstar",
                "business_id": "UoAPfKoSKJ8B5uXZ2prfeQ"
            },
            {
                "name": "Mr. Jumbo",
                "business_id": "2xBcxvOUrizsvLyPm89iXQ"
            },
            {
                "name": "Nam Wah Chinese Vietnamese",
                "business_id": "OaHJvi10dJbMIaQXg5e2Ag"
            },
            {
                "name": "Nam's Noodle",
                "business_id": "2cetuQgbP1Bnzm-uMRlocQ"
            },
            {
                "name": "Nani Restaurant",
                "business_id": "8cjXEmuqgCbIRudb2D52qw"
            },
            {
                "name": "Nanjing Bistro",
                "business_id": "Hc5NrzzzL8RAnbcrIAvZug"
            },
            {
                "name": "Natt Spil",
                "business_id": "VGKq16vCdPPHMoryy6XTHg"
            },
            {
                "name": "New Asian Delight",
                "business_id": "n8LVLEDlros22tjshJX7-w"
            },
            {
                "name": "New China Buffet",
                "business_id": "hHYyTe8ncqy9WLLgnl_30A"
            },
            {
                "name": "New China House",
                "business_id": "cjKplU8iMakS8Q7ZorzYVA"
            },
            {
                "name": "New China Inn",
                "business_id": "ccdcyzc1oSucd-qRlnYR0w"
            },
            {
                "name": "New China Jade",
                "business_id": "uA9tzuzID3t5yZ8rhZ1bQw"
            },
            {
                "name": "New China King",
                "business_id": "uuQDpnCYn1Nf2pXZTtMLHg"
            },
            {
                "name": "New China One",
                "business_id": "q3LFQHq0DPDA9PSLE7khnQ"
            },
            {
                "name": "New Chinatown Buffet",
                "business_id": "ba2xyZXG8hRb3hh7uDZs_g"
            },
            {
                "name": "New Dragon Express",
                "business_id": "rQ6C54q1N2iq9iDKSA3QGA"
            },
            {
                "name": "New Dumpling And Sushi House",
                "business_id": "hwe7f0QthkND-H4Ekg37qw"
            },
            {
                "name": "New Gum Do",
                "business_id": "BQasaL9XWUhlFndmKYtMHw"
            },
            {
                "name": "New Jackie Chen's Chinese Restaurant",
                "business_id": "G0F3kmnES1i8a9Vp78ct7w"
            },
            {
                "name": "New Lucky",
                "business_id": "-Is6Ney1wmsJAjvDdkaaaQ"
            },
            {
                "name": "New Ming Restaurant",
                "business_id": "79G_4PgWIO1BPve3D1tD_Q"
            },
            {
                "name": "New Peking Express",
                "business_id": "z8Cw9KBnDj3X40H9fXElYw"
            },
            {
                "name": "New Wong's Chinese Restaurant",
                "business_id": "i55cm4i5C7fSCVONIQ8DRg"
            },
            {
                "name": "Ni's Express Chinese Restaurant",
                "business_id": "BBpEOprko-9I8bnon9N0ew"
            },
            {
                "name": "Ni's Wok",
                "business_id": "tTDxa8OzmxUkpVifQ-cEWw"
            },
            {
                "name": "Night Market Gourmet",
                "business_id": "6Az5aA5sdrqwfJjnS8TROQ"
            },
            {
                "name": "No 1 Buffet",
                "business_id": "WesHVJ45hCr17_bn9s69nw"
            },
            {
                "name": "No 1 China House",
                "business_id": "uNMQV-r1nO5dfGSGnVTFUA"
            },
            {
                "name": "No 1 Chinese Kitchen",
                "business_id": "kbq9QlIprqKpIWXZEXtGSA"
            },
            {
                "name": "No 1 Express",
                "business_id": "rS4vCHv4UPjYLiDN74Y9Gw"
            },
            {
                "name": "No 1 Kitchen",
                "business_id": "THTiTUAvK1ihGpXleFjGcQ"
            },
            {
                "name": "No. 1 Chinese Restaurant",
                "business_id": "1p5izA5Py5zN7CuNAxPkvw"
            },
            {
                "name": "No. 1 Kitchen",
                "business_id": "YufWhkZQPC6As55MuXTU8g"
            },
            {
                "name": "No.1 Asian Buffet",
                "business_id": "v630GIZJUVlggrMSDLGclQ"
            },
            {
                "name": "Noble House",
                "business_id": "mwKixosYQq8zyx2YAvrkPw"
            },
            {
                "name": "Noodles & Company",
                "business_id": "p2RqycIW2jzjbQnkEw5lkA"
            },
            {
                "name": "Noodles & Company",
                "business_id": "gyDTYm_NDWXEHBPGnL-oRQ"
            },
            {
                "name": "Noodles & Company",
                "business_id": "JtSNHDRRZffnHBEsJudW-g"
            },
            {
                "name": "Noodles & Company",
                "business_id": "pF8eI3VIN8J4vroeywv5tg"
            },
            {
                "name": "Noodles & Company",
                "business_id": "bFBV-rYwr6qKT7u0ovZhQg"
            },
            {
                "name": "Noodles & Company",
                "business_id": "3qrfY-XCUKVyrO5T6GskqA"
            },
            {
                "name": "Northeastern Kitchen",
                "business_id": "atE68d1gSZf3849yIGLBJw"
            },
            {
                "name": "Number 1 Kitchen",
                "business_id": "4_sXnBAHU3lGxVfPUn0CNQ"
            },
            {
                "name": "Number One Wok",
                "business_id": "6vVkSaymw-4MOTPh68HN3Q"
            },
            {
                "name": "N\u00fcjoy",
                "business_id": "RwwV2LrIbdquFw6SN-l27Q"
            },
            {
                "name": "Old Town Buffet",
                "business_id": "j2kjfjODIZyNPxAu1Dow6A"
            },
            {
                "name": "Orient Express",
                "business_id": "jDZJsIyc3jXjcTtJk_p8ZA"
            },
            {
                "name": "Orient Express",
                "business_id": "vzwTXHLB5iTL2TlW6oVfUQ"
            },
            {
                "name": "Orient House",
                "business_id": "ceuvH6NpDhpT1p4q1w93pA"
            },
            {
                "name": "Orient Kitchen",
                "business_id": "l_pR3x7v2mvE3luVdmGuoQ"
            },
            {
                "name": "Oriental Express",
                "business_id": "5It12biyGxe2Dz6kkf7wGQ"
            },
            {
                "name": "Oriental Palace Buffet",
                "business_id": "CbsS6VvPsIvpytUbLAu71Q"
            },
            {
                "name": "Oriental Wok",
                "business_id": "-R_dMb9Z1eBv_FlYZrrKbw"
            },
            {
                "name": "Osaka Sushi & Chinese Restaurant",
                "business_id": "15RvAvPxUBl3HmnGMJdtTQ"
            },
            {
                "name": "P.F. Chang's",
                "business_id": "HzE3NnlAzIcqiHDydpvzrQ"
            },
            {
                "name": "P.F. Chang's",
                "business_id": "sOaeX1zQWuqbPcclvjtdeA"
            },
            {
                "name": "P.F. Chang's",
                "business_id": "_AKdBFzkl7GY-daxUCCbVA"
            },
            {
                "name": "P.F. Chang's",
                "business_id": "VKNwgZGroTNHcPqgRtmcpA"
            },
            {
                "name": "P.F. Chang's",
                "business_id": "cGQKUOAZm_VHcQOJWbatog"
            },
            {
                "name": "Pacific Chinese Buffet",
                "business_id": "KHEkVJ7j0cqoMPFBqBHN7A"
            },
            {
                "name": "Pacific East Japanese And Maylaysian",
                "business_id": "jtvy90-8KNih9-LanDTiOg"
            },
            {
                "name": "Pacific Ring",
                "business_id": "jrlkSj1TR6HWBaOJ4AzwKw"
            },
            {
                "name": "Pan Asia",
                "business_id": "pRfIJ6zurjEsWmJheDOP6A"
            },
            {
                "name": "Panda",
                "business_id": "VUDwlypqw1-DTK_lfEP4jg"
            },
            {
                "name": "Panda Chinese Kitchen",
                "business_id": "EEAtafGPtPhwERoM3onXuw"
            },
            {
                "name": "Panda Express",
                "business_id": "owV0aSgh4t_9aG56iPxGEw"
            },
            {
                "name": "Panda Express",
                "business_id": "G4JLnk8TkeAhZ71V4Pof8A"
            },
            {
                "name": "Panda Express",
                "business_id": "WTluJrwTxVxZkXovV6cnnQ"
            },
            {
                "name": "Panda Express",
                "business_id": "GeeR1ScER2WpFoJs1sTjsA"
            },
            {
                "name": "Panda Express",
                "business_id": "AQ76VSVrSPajc2qFZDmzeg"
            },
            {
                "name": "Panda Express",
                "business_id": "M7SEPUqtCFtZJ8O8hFGY4A"
            },
            {
                "name": "Panda Express",
                "business_id": "rcnjeruxT_-zThMekbMUbA"
            },
            {
                "name": "Panda Express",
                "business_id": "1ofeAP5vdjnOSeO5S2pzSg"
            },
            {
                "name": "Panda Express",
                "business_id": "v-E_fwn4CesE_rdmxvwvSQ"
            },
            {
                "name": "Panda Express",
                "business_id": "MA5R-mV6ljRM1MK6Mdiv5g"
            },
            {
                "name": "Panda Express",
                "business_id": "i_t8WTwztuHweRqQ89hmuQ"
            },
            {
                "name": "Panda Express",
                "business_id": "WghhtS-tqDWMh_W2O13CYA"
            },
            {
                "name": "Panda Express",
                "business_id": "tQaIWc9qeiB1IU163LKlAw"
            },
            {
                "name": "Panda Express",
                "business_id": "WNvceXcngWjZz_IinDwYwA"
            },
            {
                "name": "Panda Express",
                "business_id": "sfdDEPXrpsOaywcu2jhjoA"
            },
            {
                "name": "Panda Express",
                "business_id": "tetKWtLT0639lqnD9QJRKw"
            },
            {
                "name": "Panda Express",
                "business_id": "mdpETdI-PdPbMtiAnf8m8g"
            },
            {
                "name": "Panda Garden",
                "business_id": "k0wkhJXCW-AOotS_hRunUg"
            },
            {
                "name": "Panda Garden",
                "business_id": "e-XkLeDKWKpleCT5a78gsw"
            },
            {
                "name": "Panda Kitchen",
                "business_id": "Ubye_qiESMKdUjQUBmNWWg"
            },
            {
                "name": "Panda Restaurant",
                "business_id": "mchIGapc-1lRQKcsZhD93A"
            },
            {
                "name": "Panda Wok Asian Cuisine",
                "business_id": "BCga5CbMqcZLCpxAuln57w"
            },
            {
                "name": "Pandas",
                "business_id": "vNdf_D-Prw2lXDLeKHohxA"
            },
            {
                "name": "Pearl Asian Kitchen",
                "business_id": "MxGk2Pxy2M0fQUV0t4bsbQ"
            },
            {
                "name": "Pearl of the Orient",
                "business_id": "gvur69cXFtawJnJbNzFuZQ"
            },
            {
                "name": "Peking Chinese",
                "business_id": "kD1u5HwZpWOH2bAU_W0ARQ"
            },
            {
                "name": "Peking Chinese Restaurant",
                "business_id": "pYR9KSNrJMEx8PIjx8rccw"
            },
            {
                "name": "Peking Garden",
                "business_id": "M-ArbQUROY2OgeSQBBDLmw"
            },
            {
                "name": "Peking Garden Restaurant",
                "business_id": "SUktrYdNQD8k2vvkM4OpfA"
            },
            {
                "name": "Peking House",
                "business_id": "lWk3vNrOIFTbUwEZBkY2wg"
            },
            {
                "name": "Peking House Restaurant",
                "business_id": "D0KX5BQsbaIcWd-TpQ4wLg"
            },
            {
                "name": "Peking Restaurant",
                "business_id": "0DarxWxf-Cv0WT_EEWsM9w"
            },
            {
                "name": "Phoenix Express",
                "business_id": "t_SvwKRaMyNHj2NOMvMv1Q"
            },
            {
                "name": "Phong May House",
                "business_id": "sReFrTIJ92iDprWD8dKAuw"
            },
            {
                "name": "Phusion Cafe",
                "business_id": "3e0IGa_-zqTemKLc1dbdmg"
            },
            {
                "name": "Pine Garden Restaurant",
                "business_id": "ubVWVTrw4zvsqnaW22-BMw"
            },
            {
                "name": "Plum Pan Asian Kitchen",
                "business_id": "BsLyCu_lkEdkG42qmvZlnQ"
            },
            {
                "name": "QQ Asian Buffet",
                "business_id": "cPfnF9PAvVjamEdZM3wTzA"
            },
            {
                "name": "QQ Express",
                "business_id": "Lku_keJf44D0LxbRAIZOcg"
            },
            {
                "name": "Rainbow Garden",
                "business_id": "-865Ps6xb3h1LP67JcQ3mA"
            },
            {
                "name": "Rainbow Garden Champaign",
                "business_id": "zswdqM8Av3KxVv9o7_6ORA"
            },
            {
                "name": "Red Bowl",
                "business_id": "A8jt8v7bixb_DswY2uJQaw"
            },
            {
                "name": "Red China",
                "business_id": "ErGfEO3dZB37kxYjTZUXAA"
            },
            {
                "name": "Red Dragon",
                "business_id": "IcrFc5IwCcKyGbVmgWjVjg"
            },
            {
                "name": "Red Pepper Chinese Restaurant",
                "business_id": "PT0N41nUD3CErvn046JEhg"
            },
            {
                "name": "Red Tea House",
                "business_id": "JJi7c7uiTzCqeWNTsldgXQ"
            },
            {
                "name": "Restaurant Hana",
                "business_id": "eC-duRpbiVsCD14oGYiDOA"
            },
            {
                "name": "Rice Bowl",
                "business_id": "HbtpJdgRLQcfn2HhqC7wAA"
            },
            {
                "name": "Rice Garden",
                "business_id": "iDDW5kjoLVN9rqrGM0cwjg"
            },
            {
                "name": "Rice Inn",
                "business_id": "8LUKD_9rkJoUIIuT9uiDbA"
            },
            {
                "name": "Rice King",
                "business_id": "5wr_UtUUdF8L2UlaD1DhNQ"
            },
            {
                "name": "Richie Chan's Chinese Restaurant",
                "business_id": "Pawavw9U8rjxWVPU-RB7LA"
            },
            {
                "name": "Rose Tea Cafe",
                "business_id": "RvwZqjdkZ_pER0moPXLZAQ"
            },
            {
                "name": "Rose Tea Cafe",
                "business_id": "AYr2URtjoQ8Toh8_Jr4G6A"
            },
            {
                "name": "Royal Buffet & Grill",
                "business_id": "zOHQdGK6D3S0rvyNsrQi0Q"
            },
            {
                "name": "Ruby Oriental Restaurant",
                "business_id": "mv-jYCNbl37aZ7gVZu8vaw"
            },
            {
                "name": "Saigon Restaurant and Bar",
                "business_id": "-_DxZ8gKU50sfuZEu4ypKg"
            },
            {
                "name": "Sakura",
                "business_id": "LnYkQ2Hjm-klqYJVgZ1cEQ"
            },
            {
                "name": "Sakura Sushi House",
                "business_id": "VEa-IUbIgi9dmpCFMTn8Tw"
            },
            {
                "name": "Sakura Teppanyaki & Sushi",
                "business_id": "zXJilaBN28oUdX7Owf0fRA"
            },
            {
                "name": "Sapporo Asian Cuisine & Sushi Bar",
                "business_id": "qhuuWs1eshxEHhTSfGV2rg"
            },
            {
                "name": "Sesame & Soy",
                "business_id": "tjUBOqJK-iH8S40pYGhF3Q"
            },
            {
                "name": "Sesame Garden",
                "business_id": "A5Xd85djipsW546Bq6qIYA"
            },
            {
                "name": "Sesame Inn",
                "business_id": "J_NA-_WNLAJQg7eZwn1dWw"
            },
            {
                "name": "Sesame Inn",
                "business_id": "a5xUI7TvsNhM5gZr6KowDg"
            },
            {
                "name": "Sesame Inn Chinese Restaurant",
                "business_id": "aHVhlCvmlNnnPf-LgclNNA"
            },
            {
                "name": "Sesame Inn Chinese Restaurant",
                "business_id": "EhlOUjd2dh52SV_XfoORSA"
            },
            {
                "name": "Shanghai 1938",
                "business_id": "d51qbs6CitHbFD--G-AEVw"
            },
            {
                "name": "Shanghai 1938",
                "business_id": "cGuUEFw374zfpr3Cp8ywJw"
            },
            {
                "name": "Shanghai Joe",
                "business_id": "mmtjbwUUjw266ulkEnRX3Q"
            },
            {
                "name": "Shanghai Wok by B & Y",
                "business_id": "D2eZD_MP8Ds32rkoVI_MBQ"
            },
            {
                "name": "Siam Cafe",
                "business_id": "Tm2dKN_-DCdZfF2xMWrX7w"
            },
            {
                "name": "Sichuan Gourmet",
                "business_id": "DwmAsemahJywywhuqv5J1Q"
            },
            {
                "name": "Sichuan Gourmet",
                "business_id": "7aZf5c1UNotq4MabBXMZLA"
            },
            {
                "name": "Sichuan Hot Pot Cuisine",
                "business_id": "HiJ2GEMZGKI8vwalAp2h-Q"
            },
            {
                "name": "Sichuan House Chinese Restaurant",
                "business_id": "5S8KaaAIjqo2bJcVlMNW5w"
            },
            {
                "name": "Sichuan Palace",
                "business_id": "Q3zZTpHQBSbiPq2lLaTtgw"
            },
            {
                "name": "Silk Pagoda Restaurant",
                "business_id": "5qtc1s-TKdgzPccKwY4SRw"
            },
            {
                "name": "Silk Road Gourmet Chinese",
                "business_id": "1MrJJ9tyNyfFrxaNZ67xFg"
            },
            {
                "name": "Silver Palace Chinese Restaurant",
                "business_id": "lSxAQR1FeSljX9zeVJTEWA"
            },
            {
                "name": "Six Minute Chinese",
                "business_id": "RdwJXTQo3Ez9DAbGpybl_w"
            },
            {
                "name": "Sizzling Hut",
                "business_id": "XE97VxjZoRxV6IM05grY0g"
            },
            {
                "name": "Smiles Chinese Food",
                "business_id": "jfK-_0x_r7Qgdg2wj60iAQ"
            },
            {
                "name": "Soba",
                "business_id": "VBhPgceaKWOXT71d3Jp38w"
            },
            {
                "name": "Social House Seven",
                "business_id": "cxVp-a28Cp7lavjaPMvK5w"
            },
            {
                "name": "Soga Shabu Shabu",
                "business_id": "AR1w3ragHgRvnU71A7aaZA"
            },
            {
                "name": "South China Restaurant",
                "business_id": "hMgIF04rrJ7oB1lGIpFt5w"
            },
            {
                "name": "South China Wok Restaurant",
                "business_id": "mZde8M2gs5popxzKOvCo5w"
            },
            {
                "name": "Spice Thai Cuisine",
                "business_id": "XF2eTNV5RfzoSJQ-kRZJmA"
            },
            {
                "name": "Spicy Tang",
                "business_id": "rf8x3ZTUwzmRUyJgoIZllQ"
            },
            {
                "name": "Spicy Tang",
                "business_id": "1qQ5VkxiBUjbGGdpBN-PUQ"
            },
            {
                "name": "Spring Garden Chinese",
                "business_id": "QvKN1zh_BCFai6oDCx3d_g"
            },
            {
                "name": "Stir Crazy Fresh Asian Grill",
                "business_id": "XJo_kPFlbuORqL-mE2Ny6w"
            },
            {
                "name": "Stir Fry 88",
                "business_id": "GnOyx_42NpBALQxXmEMxuQ"
            },
            {
                "name": "Subba Asian Restaurant",
                "business_id": "1Vbt1GsmtQm2dkC4A2L_-g"
            },
            {
                "name": "Sun Luck Garden",
                "business_id": "T4JGbW9XEGQVrLpQcNFXtA"
            },
            {
                "name": "Sun Sun Chinese Restaurant",
                "business_id": "GVTL5nxjlhzdXJMy4-4HBA"
            },
            {
                "name": "Sunny China Buffet",
                "business_id": "m4DwPVxmFDQE_FnGIOa3cQ"
            },
            {
                "name": "Sunrise Kitchen",
                "business_id": "4X3IPhAmq5YynFRDeuBlbQ"
            },
            {
                "name": "Sushi Asia Gourmet",
                "business_id": "4FN50LnQ8Q8jz1Yimb131g"
            },
            {
                "name": "Sushi Boat",
                "business_id": "NYMUlUYYEb3H0nKsauj-yw"
            },
            {
                "name": "Szechuan",
                "business_id": "izzrCdvwa1TT8rBsE7Ch7w"
            },
            {
                "name": "Szechuan Cafe",
                "business_id": "cRTkev8c66o6q6v7FstjLA"
            },
            {
                "name": "Szechuan China",
                "business_id": "0aA5l11oXes0aS6mkN5lMQ"
            },
            {
                "name": "Szechuan Express",
                "business_id": "MBirSnTW4pt2k7Ny6KC72w"
            },
            {
                "name": "Szechuan Garden",
                "business_id": "tVcnGCg8AICT_hoI-4gMsw"
            },
            {
                "name": "Szechuan Gourmet",
                "business_id": "GDpd9KZdUgnjcoCWTTphqw"
            },
            {
                "name": "Szechuan Spice",
                "business_id": "f1K6hzQecl-sJFYRUHvDDQ"
            },
            {
                "name": "Szechwan Chinese Restaurant",
                "business_id": "AKJ2qjHbvxqTxMx8hjX7sw"
            },
            {
                "name": "Szechwan Garden",
                "business_id": "4v_RbefzvGkixXXJkn-bzw"
            },
            {
                "name": "TJ Buffet Sushi & Grill",
                "business_id": "ALUqFoEbPIXEwdX7QbyR_Q"
            },
            {
                "name": "TJ Buffet Sushi And Grill",
                "business_id": "iTNsT5xYHhQWTYDTROZCRw"
            },
            {
                "name": "TJ Buffet Sushi and Grill",
                "business_id": "QI0PGXbGkIdInOOBeq6ieQ"
            },
            {
                "name": "Tai Pan",
                "business_id": "i6CxDaUKAj-HKWijwY9yGg"
            },
            {
                "name": "Tai Pei",
                "business_id": "iT9KMTR8NqYwSCW-zMUOxw"
            },
            {
                "name": "Tai Wah Asian Cuisine",
                "business_id": "ve7-f5urgRoFvhoez9eUjA"
            },
            {
                "name": "Tai Wah Chinese Restaurant",
                "business_id": "uKyyrg9nwitkBqaHvR72tA"
            },
            {
                "name": "Tai's Asian Bistro",
                "business_id": "uoV4aDfXbRmvyHSezdn--w"
            },
            {
                "name": "Taigu",
                "business_id": "OgwN65jZebPRIPSmNpRP7A"
            },
            {
                "name": "Taipei Tokyo",
                "business_id": "EHKzu5r2NEz5Zq2R84J4ow"
            },
            {
                "name": "Taiwan Little Eats",
                "business_id": "HVpwpXneaCWMeEBF7H8jpQ"
            },
            {
                "name": "Tang Dynasty",
                "business_id": "asCPMMAA1wW3GJvrPA4fTA"
            },
            {
                "name": "Tang Dynasty",
                "business_id": "BLtzUCwmGOSVgPJ78N3ORA"
            },
            {
                "name": "Tang's Wok",
                "business_id": "fVLWfO97Ddac26ptnMuE3A"
            },
            {
                "name": "Taste of China",
                "business_id": "WJ0dK9O_prt2ud1BXAZYtg"
            },
            {
                "name": "Taste of China",
                "business_id": "i5A6Bb9SpaYb3_Yr40Pk2g"
            },
            {
                "name": "Taste of Sichuan",
                "business_id": "QIgeUHHn2hrrdEBBm1wFvA"
            },
            {
                "name": "Tasty Chinese Restaurant",
                "business_id": "mqiHZYNXnMLaEK87JZOzmA"
            },
            {
                "name": "Tavernakaya",
                "business_id": "NyGlEmuYcpZSKfk6IwJeSw"
            },
            {
                "name": "Taydo Vietnamese & Chinese Restaurant",
                "business_id": "UPSzbM6D2SkarWAINq1I9A"
            },
            {
                "name": "Tea Garden",
                "business_id": "XXNGKunbVfgCJhp7XrkU_g"
            },
            {
                "name": "Tea House Noodles",
                "business_id": "tWtuHpIFtQHMQq8q8DG3dA"
            },
            {
                "name": "Temple Garden",
                "business_id": "s43P_mLoOI348Ts_O3kTTg"
            },
            {
                "name": "Teriyaki Express",
                "business_id": "N3ZbTZfWC_oyIUxuX9KJYA"
            },
            {
                "name": "Teriyaki Express",
                "business_id": "qx-d5K0fugvnrW5AYcTqlw"
            },
            {
                "name": "Thai Gourmet",
                "business_id": "hoGyiTjrri-Sq3-EaO7Kpw"
            },
            {
                "name": "The Diner",
                "business_id": "hQMx2ZbGAa_oxJNpnTZf8Q"
            },
            {
                "name": "The Dragon Chinese Cuisine",
                "business_id": "uh5dMhIZygTzXEvn5K10jg"
            },
            {
                "name": "The Magic Noodle",
                "business_id": "ATWPQX-ATDRsIO0huW3aSg"
            },
            {
                "name": "The Mintt",
                "business_id": "QbuWKli8fme4O84t99UfSg"
            },
            {
                "name": "The Pearl",
                "business_id": "jIc8lKpK0S265D18cgQKEw"
            },
            {
                "name": "The Tong Garden",
                "business_id": "I_vzg2V92U7wdD61tvGtpg"
            },
            {
                "name": "The Wok - Chinese Express",
                "business_id": "Y81wukOSmZ6sRS1cn1QhXA"
            },
            {
                "name": "Ting's Kitchen",
                "business_id": "BNeS_hZfmdQWsqewj-LuDA"
            },
            {
                "name": "Tink Holl Seafood",
                "business_id": "JX1_mKHN38bjgQP0JB3fkg"
            },
            {
                "name": "Tipsy cow",
                "business_id": "fjRVqTl82Sql3GarA_QzIg"
            },
            {
                "name": "Tj Asian Express & Sushi",
                "business_id": "lLUnPQC-hWuErZdW4Kgv7Q"
            },
            {
                "name": "Tj Buffet Sushi & Grill",
                "business_id": "0DD-SXcNL07Rh5DA0OAtkg"
            },
            {
                "name": "Tokyo Hibachi and Sushi",
                "business_id": "ff-gd07sG0Y_4i67LqORSA"
            },
            {
                "name": "Tom's Red Pepper",
                "business_id": "QkZEdBfKhXwCF38AJG1Ylw"
            },
            {
                "name": "Tong's Cuisine",
                "business_id": "LLGGe9k7NTVy1Z2wH1_Uew"
            },
            {
                "name": "Tong-Tong Chinese Restaurant",
                "business_id": "IXP6VfjiUFIRiRbZjeUulw"
            },
            {
                "name": "Top China Buffet",
                "business_id": "ZU6pUJNBGXQZrWD9zEHtuQ"
            },
            {
                "name": "Top Food",
                "business_id": "giiWXI4DcXIdvoGmeIOeEQ"
            },
            {
                "name": "Top Shabu Shabu",
                "business_id": "eZaaYA5X3BmMTPWsOBvq8g"
            },
            {
                "name": "Turney China",
                "business_id": "nbFAn60OmDt9reIRk8vilA"
            },
            {
                "name": "Umami Ramen & Dumpling Bar",
                "business_id": "eab04KSBbf30FqB4cH8erQ"
            },
            {
                "name": "Uncle Chen",
                "business_id": "J71s0xScHVbOuFUfsAXtmQ"
            },
            {
                "name": "VIP",
                "business_id": "3-HFGxmbzSax-NySJ_LzDg"
            },
            {
                "name": "Vieng's Asian Bistro",
                "business_id": "5rb2tq_AhxQuRYu_bh464g"
            },
            {
                "name": "Viet Bistro",
                "business_id": "hEUAUdG4fBdYWvPeEASnng"
            },
            {
                "name": "WFH Oriental Food Market",
                "business_id": "B10A-q2fskHqLx5miQpmOw"
            },
            {
                "name": "Wah Fu Chinese Restaurant",
                "business_id": "7toYPf5ZAjCkEuwaMPtDwQ"
            },
            {
                "name": "Wah Kee Wonton Noodle",
                "business_id": "DQMaUSbKsRtB5lJD3egqxQ"
            },
            {
                "name": "Wah Sun",
                "business_id": "2pmOI_mrn1ZWB88IeiOMkA"
            },
            {
                "name": "Wai Wai Buffet & Grill",
                "business_id": "bO3VN1ct-6zD8Pd0AS38rg"
            },
            {
                "name": "Wai Wai Chinese Cuisine",
                "business_id": "e7M2GgkCfDYTxdPN1LL1sQ"
            },
            {
                "name": "Wang's Kitchen",
                "business_id": "Lw2vlPixPe72lDp9Cx6GoA"
            },
            {
                "name": "Wasabi Restaurant",
                "business_id": "v2a8hI1Tsi1SgFKFWD39qQ"
            },
            {
                "name": "Wild Fusion",
                "business_id": "ui33pIJmkW0s8HddH_ZZ9A"
            },
            {
                "name": "Wild Ginger China Bistro",
                "business_id": "bfF90MspMbqLWdcEU9JLcg"
            },
            {
                "name": "Wing Kee",
                "business_id": "riXr33UJRQXVMKJcNZPqqw"
            },
            {
                "name": "Wing Wah",
                "business_id": "y9_8s2b5ahsF0elT86K4Fw"
            },
            {
                "name": "Wok & Grill",
                "business_id": "BpU9-wcOWyKcVtkvnfRazA"
            },
            {
                "name": "Wok In Heaven",
                "business_id": "MwsGayIlUkXQ46mkmV3jlA"
            },
            {
                "name": "Wok of Life",
                "business_id": "bD_vqSSU_abcCT0oCzN1xA"
            },
            {
                "name": "Wok of the Falls",
                "business_id": "SbWqeztXrCTsYMsf6KGYvg"
            },
            {
                "name": "Wong's Garden",
                "business_id": "UzSXgaJjOrtdWATtzgPWqQ"
            },
            {
                "name": "Wonton Gourmet & BBQ",
                "business_id": "wftmt-n8OUA4Ng3bWWH5dw"
            },
            {
                "name": "World Buffet",
                "business_id": "4XGjbI2Ggi-kdgt9eZR83w"
            },
            {
                "name": "World Buffet",
                "business_id": "uSANDilamc1QSiCinFSKYw"
            },
            {
                "name": "Xiang Jiang",
                "business_id": "dGJwiltTg81VuCdHl485MA"
            },
            {
                "name": "Ya Fei",
                "business_id": "iuIkzvQRb4DVWOMhE4GI3g"
            },
            {
                "name": "Yamato Hibachi & Sushi Bar",
                "business_id": "35JjuQ6nsSNshtt5hyLUCQ"
            },
            {
                "name": "Yangtze",
                "business_id": "G8Js5hyLykjo8xVfIT4P5Q"
            },
            {
                "name": "Yen Ching Restaurant",
                "business_id": "dpblBM884TnUQQ5xusFMlg"
            },
            {
                "name": "Yen's Gourmet",
                "business_id": "izOvku5li7kyzY76UzLP2g"
            },
            {
                "name": "Yen's Gourmet",
                "business_id": "NdqDt4c2ZWpGTUWvcDDKkw"
            },
            {
                "name": "Yeung's House",
                "business_id": "qThJY-H6Fo8HvfdIvwrjiw"
            },
            {
                "name": "Yummy Buffet",
                "business_id": "di8-ZPAvExDPfttxMs3_JA"
            },
            {
                "name": "Yummy Garden",
                "business_id": "hKfuDwUbWJWdQWmXS_g9PA"
            },
            {
                "name": "Yummy Yummy Express",
                "business_id": "4Wnj4lg3vtcZMaibE54pmQ"
            },
            {
                "name": "Yuzu Kitchen",
                "business_id": "rXKzE4Iraz7vGWovWW-aBA"
            },
            {
                "name": "ZZ Yum Fun",
                "business_id": "c8bdxic-VcGEW-bA1EhW7g"
            },
            {
                "name": "Zaw's Asian Foods",
                "business_id": "X4YG1pu1MDVSi07S3i4YCA"
            },
            {
                "name": "Zen Asian Diner",
                "business_id": "afdthOntL8hfhomIFX-NWg"
            },
            {
                "name": "Zen Cuisine",
                "business_id": "x8dRsP9mpI2FD6vazC990A"
            },
            {
                "name": "Zen Restaurant",
                "business_id": "Z5T-muBHTERxj3jFqhiLHw"
            },
            {
                "name": "ZenZen Taste \u56db\u5408\u9662",
                "business_id": "2Cmpz9lgr-wfOLAwgUf79g"
            },
            {
                "name": "Zhen Choo Chinese Restaurant",
                "business_id": "zkW7OAv8Cnb-3SxEBOubTQ"
            },
            {
                "name": "Zuki Sushi House",
                "business_id": "F8ZTmT9pGiSF2jx9FZDjdQ"
            },
            {
                "name": "iNoodle",
                "business_id": "74O-ZufCco3hBcMQc3Vf8Q"
            }
        ],
        business_id: false,
        business_location: false, 
        business_rating: false,
        business_reviews: false,

        business_kids: false,
        business_reservation: false,
        


        chart1: '',
        chart2: ''
    },
    mounted: function () {


        var chart1 = echarts.init(document.getElementById('chart-1'));
        this.chart1 = chart1
       
        var option1 = {
            title: {
                // text: 'Ratings of All Business',
                // subtext: 'Test',
                left: 'center'
            },
            xAxis: {
                type: 'category',
                data: ['1.0', '1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0'],
                name: 'Rating'
            },
            yAxis: {
                type: 'value',
                name: 'Count',

            },
            series: [{
                data: [4, 8, 31, 91, 192, 206, 164, 48, 7],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                },
                barCategoryGap: '2%',
                markLine: {
                    lineStyle: {
                        color: 'orange',
                        width: 2
                    },
                    symbolSize: [0, 0],
                    data: [[
                        {
                            name: 'Average: 3.84',
                            coord: ['3.5', 0]
                        },
                        {
                            coord: ['3.5',  250]
                        }
                    ]]
                }
            }]
        };


        // use configuration item and data specified to show chart
        chart1.setOption(option1);
        


        var chart2 = echarts.init(document.getElementById('chart-2'));
        this.chart2 = chart2
        // specify chart configuration item and data
        var option2 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            
                    type: 'shadow'        
                }
            },
            legend: {
                data: [ 'Your Business Opening Hours',  'Industry Opening Hours']
            },
            // grid: {
            //     left: '3%',
            //     right: '4%',
            //     bottom: '3%',
            //     containLabel: true
            // },
            xAxis: [
                
                {
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    data: ['Mon.', 'Tue.', 'Wed.', 'Thur.', 'Fri.', 'Sat.', 'Sun.'],
                    splitArea: {
                    show: true
                }
                }
            ],
            yAxis: [
                
                {
                    type: 'value',
                    max: 24,
                    name: 'Hour in the day',
                }
            ],
            series: [
                /*{
                    name: 'Start',
                    type: 'bar',
                    stack: 'business',
                    
                    data: [ 9, 9, 9, 9,9,9,9 ],
                    itemStyle: {color: 'rgba(193,53,49, 0)'},
                },
                {
                    name: 'Your Business',
                    type: 'bar',
                    stack: 'business',
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    data: [19, 19, 19, 19, 19, 19,19],
                    itemStyle: {color: 'rgb(193,53,49)'},
                },*/
                
                
                {
                    name: 'Industry Open Time',
                    type: 'bar',
                    stack: 'industry',
                    
                    data: [ 11.5, 11.42, 11.39, 11.49,11.45,11.62,12.23 ],
                    itemStyle: {color: 'rgba(97,160,168, 0)'},
                },
                {
                    name: 'Industry Opening Hours',
                    type: 'bar',
                    stack: 'industry',
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    data: [9.8, 9.79, 9.81, 9.79, 10.27, 10.23,8.9],
                    itemStyle: {color: 'rgb(97,160,168)'},
                },
                
            ]
        };
        


        // use configuration item and data specified to show chart
        chart2.setOption(option2);


    },

    ready: function () {
        
    },
    methods: {
        changeBusiness: function() {
            var self = this
            // console.log(self.currentBusiness)
            $.ajax({
                url: 'data/ChineseBusiness/' + self.business_id + '.json',
                method: 'GET',
                success: function(res){
                    console.log(res)
                    // update vars
                    self.business_location = res.address + ', ' + res.city + ', ' + res.state + ' ' + res.postal_code;
                    self.business_rating = res.stars.toFixed(1);
                    self.business_reviews = res.review_count;
                    self.business_kids = ('GoodForKids' in  res.attributes) && res.attributes.GoodForKids == 'True';
                    self.business_reservation = ('RestaurantsReservations' in  res.attributes) && res.attributes.RestaurantsReservations == 'True';
                    // rating chart 
                    self.chart1.setOption({
                        
                        series: [{
                            
                            markLine: {
                                lineStyle: {
                                    color: 'red',
                                    width: 2
                                },
                                symbolSize: [0, 0],
                                data: [[
                                    {
                                        name: 'Your Business',
                                        coord: [self.business_rating, 0]
                                    },
                                    {
                                        coord: [self.business_rating,  250]
                                    }
                                ]]
                            }
                        }]
                    })

                    // opening time chart
                    self.chart2.setOption({
                        series: [
                            {
                                name: 'Your Business Open Time',
                                type: 'bar',
                                stack: 'business',
                                
                                data: res.parsedHours.startTime,
                                itemStyle: {color: 'rgba(193,53,49, 0)'},
                            },
                            {
                                name: 'Your Business Opening Hours',
                                type: 'bar',
                                stack: 'business',
                                label: {
                                    show: true,
                                    position: 'inside'
                                },
                                data: res.parsedHours.durationLength,
                                itemStyle: {color: 'rgb(193,53,49)'},
                            },
                            
                            
                            {
                                name: 'Industry Open Time',
                                type: 'bar',
                                stack: 'industry',
                                
                                data: [ 11.5, 11.42, 11.39, 11.49,11.45,11.62,12.23 ],
                                itemStyle: {color: 'rgba(97,160,168, 0)'},
                            },
                            {
                                name: 'Industry Opening Hours',
                                type: 'bar',
                                stack: 'industry',
                                label: {
                                    show: true,
                                    position: 'inside'
                                },
                                data: [9.8, 9.79, 9.81, 9.79, 10.27, 10.23,8.9],
                                itemStyle: {color: 'rgb(97,160,168)'},
                            },
                            
                        ]
                    })



                }
            })
        }
    }





})












