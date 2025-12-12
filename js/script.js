// countries get
const countries = [
    { code: "AF", title: "Afghanistan", text: "Bamiyan Valley & Hindu Kush", subtext: "Kabul • 42M", price: "$2,490", flag: "https://flagcdn.com/w320/af.png", img: "https://udayton.edu/magazine/2021/08/images/2108_afganistan_island.jpg", lng: 65, lat: 33 },
    { code: "AL", title: "Albania", text: "Albanian Riviera & Theth", subtext: "Tirana • 2.8M", price: "$1,290", flag: "https://flagcdn.com/w320/al.png", img: "https://media.istockphoto.com/id/187593637/photo/lakes-in-albanian-alps.jpg?s=612x612&w=0&k=20&c=Zxr_ZzA1zNc7MrKpttr1uUa2DllCy6gw_BNFMAkjPVQ=", lng: 20, lat: 41 },
    { code: "DZ", title: "Algeria", text: "Sahara dunes & Tassili n'Ajjer", subtext: "Algiers • 46M", price: "$1,890", flag: "https://flagcdn.com/w320/dz.png", img: "https://i.pinimg.com/736x/df/6c/58/df6c58826766e0e9e46641f2aac45932.jpg", lng: 3, lat: 28 },
    { code: "AS", title: "American Samoa", text: "Tutuila island & coral reefs", subtext: "Pago Pago • 55K", price: "$4,490", flag: "https://flagcdn.com/w320/as.png", img: "https://i0.wp.com/americanfieldtrip.com/wp-content/uploads/2018/05/american-samoa-67.jpg?fit=1000%2C667&ssl=1", lng: -170, lat: -14.3333 },
    { code: "AD", title: "Andorra", text: "Vallnord & Pyrenees peaks", subtext: "Andorra la Vella • 80K", price: "$1,650", flag: "https://flagcdn.com/w320/ad.png", img: "https://media.istockphoto.com/id/496622843/photo/andorra-la-vella-under-puffy-clouds.jpg?s=612x612&w=0&k=20&c=osJew0OhMJs0A4x55mq3ns32EBvjKDuwBDKDsHrmVjM=", lng: 1.6, lat: 42.5 },
    { code: "AO", title: "Angola", text: "Kalandula Falls & Namib desert", subtext: "Luanda • 37M", price: "$3,290", flag: "https://flagcdn.com/w320/ao.png", img: "https://media.istockphoto.com/id/1144443394/photo/road-from-gabela-to-conda.jpg?s=612x612&w=0&k=20&c=AonByvx9c3I7KXvhniL4MnZUl12GS2Rq5n_mnn9-5f4=", lng: 18.5, lat: -12.5 },
    { code: "AI", title: "Anguilla", text: "Shoal Bay & luxury villas", subtext: "The Valley • 15K", price: "$4,990", flag: "https://flagcdn.com/w320/ai.png", img: "https://blueskyluxurytravels.com/wp-content/uploads/2020/01/nature-outdoors-sky-landscape-ocean-impact-earth-epic_t20_V71YRG.jpg", lng: -63.1667, lat: 18.25 },
    { code: "AQ", title: "Antarctica", text: "Icebergs & penguins", subtext: "No population", price: "$14,990", flag: "https://flagcdn.com/w320/aq.png", img: "https://t4.ftcdn.net/jpg/07/21/24/73/360_F_721247329_yFwlbYMGano3blkP4GcuNOZ4PqSmFCZJ.jpg", lng: 0, lat: -90 },
    { code: "AG", title: "Antigua and Barbuda", text: "Nelson's Dockyard & 365 beaches", subtext: "Saint John's • 100K", price: "$3,690", flag: "https://flagcdn.com/w320/ag.png", img: "https://www.tom-archer.com/wp-content/uploads/2018/06/antigua-barbuda-drone-photography-carlisle-bay-landscape.jpg", lng: -61.8, lat: 17.05 },
    { code: "AR", title: "Argentina", text: "Perito Moreno & Patagonia", subtext: "Buenos Aires • 46M", price: "$2,890", flag: "https://flagcdn.com/w320/ar.png", img: "https://blogpatagoniaqa.australis.com/wp-content/uploads/2018/06/iStock-537901694.jpg", lng: -64, lat: -34 },
    { code: "AM", title: "Armenia", text: "Tatev Monastery & Mount Ararat", subtext: "Yerevan • 3M", price: "$1,490", flag: "https://flagcdn.com/w320/am.png", img: "https://feelarmenia.com/wp-content/uploads/2018/03/landscapes.jpg", lng: 45, lat: 40 },
    { code: "AW", title: "Aruba", text: "Eagle Beach & flamingos", subtext: "Oranjestad • 108K", price: "$3,790", flag: "https://flagcdn.com/w320/aw.png", img: "https://media.istockphoto.com/id/628401416/photo/alto-vista-chapel-on-aruba-island-in-the-caribbean.jpg?s=612x612&w=0&k=20&c=mHOfMuTocdbbACIRVI6Rk7nefRbFDWFDFDWFD=s", lng: -69.9667, lat: 12.5 },
    { code: "AU", title: "Australia", text: "Uluru & Great Barrier Reef", subtext: "Canberra • 26M", price: "$4,290", flag: "https://flagcdn.com/w320/au.png", img: "https://www.telegraph.co.uk/content/dam/Travel/2020/September/Twelve%20Apostles2.jpg?imwidth=640", lng: 133, lat: -27 },
    { code: "AT", title: "Austria", text: "Hallstatt & Grossglockner", subtext: "Vienna • 9M", price: "$2,190", flag: "https://flagcdn.com/w320/at.png", img: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/if4a8b9d34c6c4705/version/1698478006/best-natural-wonders-in-austria-vorderer-lake.jpg", lng: 13.3333, lat: 47.3333 },
    { code: "AZ", title: "Azerbaijan", text: "Baku skyline & Gobustan", subtext: "Baku • 10M", price: "$1,790", flag: "https://flagcdn.com/w320/az.png", img: "https://media.istockphoto.com/id/1981777041/photo/view-to-lake-maralgol-in-azerbaijan-republic.jpg?s=612x612&w=0&k=20&c=MyHnRv654iyHILWFwON_FNtRI8B9YmzZTHrTH= ", lng: 47.5, lat: 40.5 },
    { code: "BS", title: "Bahamas", text: "Pink sands & swimming pigs", subtext: "Nassau • 410K", price: "$3,690", flag: "https://flagcdn.com/w320/bs.png", img: "https://www.sandals.com/blog/content/images/2020/01/Long-Island-Bahamas-Dean-s-Blue-Hole.jpg", lng: -76, lat: 24.25 },
    { code: "BH", title: "Bahrain", text: "Tree of Life & Manama skyline", subtext: "Manama • 1.5M", price: "$2,390", flag: "https://flagcdn.com/w320/bh.png", img: "https://media.istockphoto.com/id/700794096/photo/panorama-of-main-cascade-of-ekom-waterfall-at-nkam-river-cameroon.jpg?s=612x612&w=0&k=20&c=f1-d25kLWOpBa6qjikOzqtb4q2hpH1jQusQ8q0SPUn4=", lng: 50.55, lat: 26 },
    { code: "BD", title: "Bangladesh", text: "Cox’s Bazar & Sundarbans", subtext: "Dhaka • 175M", price: "$990", flag: "https://flagcdn.com/w320/bd.png", img: "https://tntribune.com/wp-content/uploads/2021/08/feat_30d48d6e-7b84-4dfe-bf22-6306f8a2d403.jpg", lng: 90, lat: 24 },
    { code: "BB", title: "Barbados", text: "Crane Beach & Harrison’s Cave", subtext: "Bridgetown • 280K", price: "$3,290", flag: "https://flagcdn.com/w320/bb.png", img: "https://as1.ftcdn.net/jpg/01/75/00/46/1000_F_175004626_VUxyKfQRCc6pVjw6v5DddcaFO83YKYVg.jpg", lng: -59.5333, lat: 13.1667 },
    { code: "BY", title: "Belarus", text: "Mir Castle & Belovezhskaya Pushcha", subtext: "Minsk • 9.4M", price: "$1,190", flag: "https://flagcdn.com/w320/by.png", img: "https://www.shutterstock.com/image-photo/beauty-nature-belarus-260nw-1112635859.jpg", lng: 28, lat: 53 },
    { code: "BE", title: "Belgium", text: "Bruges canals & Atomium", subtext: "Brussels • 11.7M", price: "$1,990", flag: "https://flagcdn.com/w320/be.png", img: "https://www.capturedbyv.be/wp-content/uploads/2021/02/7856253776_IMG_5135-1440x960.jpg", lng: 4, lat: 50.8333 },
    { code: "BZ", title: "Belize", text: "Great Blue Hole & Ambergris Caye", subtext: "Belmopan • 420K", price: "$2,890", flag: "https://flagcdn.com/w320/bz.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: -88.75, lat: 17.25 },
    { code: "BJ", title: "Benin", text: "Ganvié stilt village & Ouidah", subtext: "Porto-Novo • 14M", price: "$1,690", flag: "https://flagcdn.com/w320/bj.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: 2.25, lat: 9.5 },
    { code: "BM", title: "Bermuda", text: "Horseshoe Bay & crystal caves", subtext: "Hamilton • 64K", price: "$4,190", flag: "https://flagcdn.com/w320/bm.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: -64.75, lat: 32.3333 },
    { code: "BT", title: "Bhutan", text: "Paro Taktsang & Punakha Dzong", subtext: "Thimphu • 780K", price: "$3,990", flag: "https://flagcdn.com/w320/bt.png", img: "https://media.istockphoto.com/id/1326288165/photo/a-glorious-evening-in-punakha-bhutan-bhutan-is-also-known-as-the-land-of-the-thunder-dragon.jpg?s=612x612&w=0&k=20&c=Er8R6Q93DML2ng1tf0lJxyP16pE_Xcv3vH8TYOkguvo=", lng: 90.5, lat: 27.5 },
    { code: "BO", title: "Bolivia", text: "Salar de Uyuni & La Paz", subtext: "Sucre • 12.3M", price: "$1,790", flag: "https://flagcdn.com/w320/bo.png", img: "https://farm9.staticflickr.com/8005/7355056170_4358cdd73d_b.jpg", lng: -65, lat: -17 },
    { code: "BA", title: "Bosnia and Herzegovina", text: "Mostar Bridge & Kravica Falls", subtext: "Sarajevo • 3.2M", price: "$1,590", flag: "https://flagcdn.com/w320/ba.png", img: "https://cdn.kimkim.com/files/a/images/ef371814cb15798d344e18c0e3f7bb018d31b65a/medium-887b2d2f9c2c9fa0b421a20bd4047844.jpg", lng: 18, lat: 44 },
    { code: "BW", title: "Botswana", text: "Okavango Delta & Kalahari", subtext: "Gaborone • 2.6M", price: "$5,490", flag: "https://flagcdn.com/w320/bw.png", img: "https://media.istockphoto.com/id/1078597124/photo/african-camping.jpg?s=612x612&w=0&k=20&c=yj4s_yjyF_J28cZvhK8J1ayTGpeBfRdULqxRa-XLM-A=", lng: 24, lat: -22 },
    { code: "BR", title: "Brazil", text: "Iguazu Falls & Christ the Redeemer", subtext: "Brasília • 216M", price: "$2,490", flag: "https://flagcdn.com/w320/br.png", img: "https://media.cnn.com/api/v1/images/stellar/prod/160729100010-brazil-tease-3.jpg?q=w_2700,h_1800,x_0,y_0,c_fill", lng: -55, lat: -10 },
    { code: "IO", title: "British Indian Ocean Territory", text: "Diego Garcia atoll", subtext: "Military base", price: "Restricted", flag: "https://flagcdn.com/w320/io.png", img: "https://img.freepik.com/free-photo/beautiful-natural-island-landscape_23-2150788142.jpg?semt=ais_hybrid&w=740&q=80", lng: 71.5, lat: -6 },
    { code: "BN", title: "Brunei", text: "Ulu Temburong & golden mosques", subtext: "Bandar Seri Begawan • 450K", price: "$3,290", flag: "https://flagcdn.com/w320/bn.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: 114.6667, lat: 4.5 },
    { code: "BG", title: "Bulgaria", text: "Rila Monastery & Black Sea", subtext: "Sofia • 6.8M", price: "$1,390", flag: "https://flagcdn.com/w320/bg.png", img: "https://media.licdn.com/dms/image/v2/D4D12AQH65HVgJHPyNw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1677166653832?e=2147483647&v=beta&t=UbB7jz7cYbKURk2yfNyeakpoVCc1tLp0_iJVoupLEGI", lng: 25, lat: 43 },
    { code: "BF", title: "Burkina Faso", text: "Sindou Peaks & Banfora Cascades", subtext: "Ouagadougou • 23M", price: "$1,690", flag: "https://flagcdn.com/w320/bf.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: -2, lat: 13 },
    { code: "BI", title: "Burundi", text: "Lake Tanganyika & Kibira Forest", subtext: "Gitega • 13M", price: "$1,790", flag: "https://flagcdn.com/w320/bi.png", img: "https://www.shutterstock.com/image-photo/beautiful-terraced-hills-burundi-surrounded-600nw-2528731723.jpg", lng: 30, lat: -3.5 },
    { code: "KH", title: "Cambodia", text: "Angkor Wat sunrise", subtext: "Phnom Penh • 17M", price: "$1,490", flag: "https://flagcdn.com/w320/kh.png", img: "https://www.shutterstock.com/image-photo/aerial-view-ban-gioc-waterfall-600nw-2009607749.jpg", lng: 105, lat: 13 },
    { code: "CM", title: "Cameroon", text: "Mount Cameroon & Waza Park", subtext: "Yaoundé • 28M", price: "$2,190", flag: "https://flagcdn.com/w320/cm.png", img: "https://media.istockphoto.com/id/700794096/photo/panorama-of-main-cascade-of-ekom-waterfall-at-nkam-river-cameroon.jpg?s=612x612&w=0&k=20&c=f1-d25kLWOpBa6qjikOzqtb4q2hpH1jQusQ8q0SPUn4=", lng: 12, lat: 6 },
    { code: "CA", title: "Canada", text: "Banff & Moraine Lake", subtext: "Ottawa • 39M", price: "$3,890", flag: "https://flagcdn.com/w320/ca.png", img: "https://www.travelandleisure.com/thmb/0jsOKUUWlmBHJGAFG0Ev44OD8h4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-niagra-falls-BEAUTYCANADA0623-81c09c5d99fe4bbeb58ba80a39effb20.jpg", lng: -95, lat: 60 },
    { code: "CV", title: "Cape Verde", text: "Sal & Fogo volcano", subtext: "Praia • 600K", price: "$2,990", flag: "https://flagcdn.com/w320/cv.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: -24, lat: 16 },
    { code: "KY", title: "Cayman Islands", text: "Seven Mile Beach & Stingray City", subtext: "George Town • 70K", price: "$4,690", flag: "https://flagcdn.com/w320/ky.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: -80.5, lat: 19.5 },
    { code: "CF", title: "Central African Republic", text: "Dzanga-Sangha rainforest", subtext: "Bangui • 5.7M", price: "$2,490", flag: "https://flagcdn.com/w320/cf.png", img: "https://www.worldbank.org/content/dam/Worldbank/Feature%20Story/EAP/Timor-leste/TL-cultural-heritage.jpg", lng: 21, lat: 7 },
    { code: "TD", title: "Chad", text: "Zakouma elephants & Ennedi desert", subtext: "N'Djamena • 18M", price: "$2,290", flag: "https://flagcdn.com/w320/td.png", img: "https://www.telegraph.co.uk/content/dam/Travel/2019/August/chad.jpg?impolicy=Twitter-Standard", lng: 19, lat: 15 },
    { code: "CL", title: "Chile", text: "Torres del Paine & Atacama", subtext: "Santiago • 19M", price: "$2,990", flag: "https://flagcdn.com/w320/cl.png", img: "https://cdn.kimkim.com/files/a/images/04fa6d5c3024223362428e076cd70b408f22b9f7/big-da62ca219d05c3e9fc59e1b1a5d8f15e.jpg", lng: -71, lat: -30 },
    { code: "CN", title: "China", text: "Great Wall & Zhangjiajie", subtext: "Beijing • 1.41B", price: "$2,190", flag: "https://flagcdn.com/w320/cn.png", img: "https://media.istockphoto.com/id/497443692/photo/landscape-of-guilin.jpg?s=612x612&w=0&k=20&c=zPqcHT0bPxW45uhE0yD8pOVmlRyavf_dTWfvPmhR1UA=", lng: 105, lat: 35 },
    { code: "CO", title: "Colombia", text: "Tayrona & coffee plantations", subtext: "Bogotá • 52M", price: "$2,290", flag: "https://flagcdn.com/w320/co.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: -72, lat: 4 },
    { code: "KM", title: "Comoros", text: "Karthala volcano & beaches", subtext: "Moroni • 850K", price: "$2,890", flag: "https://flagcdn.com/w320/km.png", img: "https://www.wanderlustmagazine.com/wp-content/uploads/2023/11/shutterstock_1192227295-hero-scaled.jpg", lng: 44.25, lat: -12.1667 },
    { code: "CG", title: "Congo", text: "Odzala rainforest & gorillas", subtext: "Brazzaville • 6M", price: "$2,990", flag: "https://flagcdn.com/w320/cg.png", img: "http://graphics8.nytimes.com/images/2012/12/16/magazine/congo-color-slide-9ERA/congo-color-slide-9ERA-jumbo-v2.jpg", lng: 15, lat: -1 },
    { code: "CD", title: "DR Congo", text: "Virunga volcanoes & Congo River", subtext: "Kinshasa • 102M", price: "$3,290", flag: "https://flagcdn.com/w320/cd.png", img: "https://media.istockphoto.com/id/1254053927/photo/landscape-of-the-virunga-mountains-in-rwanda.jpg?s=612x612&w=0&k=20&c=YEFagi2Y1ulPHJckKBeEBdOyMrDW3eLwDHjsCZSGgGo=", lng: 25, lat: 0 },
    { code: "CK", title: "Cook Islands", text: "Aitutaki lagoon", subtext: "Avarua • 18K", price: "$5,490", flag: "https://flagcdn.com/w320/ck.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: -159.7667, lat: -21.2333 },
    { code: "CR", title: "Costa Rica", text: "Arenal & Monteverde cloud forest", subtext: "San José • 5.2M", price: "$3,190", flag: "https://flagcdn.com/w320/cr.png", img: "https://www.originaltravel.co.uk/img/v2/export/mag/Img_3939_0.jpg", lng: -84, lat: 10 },
    { code: "HR", title: "Croatia", text: "Plitvice & Dubrovnik", subtext: "Zagreb • 4M", price: "$2,290", flag: "https://flagcdn.com/w320/hr.png", img: "https://cdn.kimkim.com/files/a/images/ef371814cb15798d344e18c0e3f7bb018d31b65a/medium-887b2d2f9c2c9fa0b421a20bd4047844.jpg", lng: 15.5, lat: 45.1667 },
    { code: "CU", title: "Cuba", text: "Old Havana & Viñales valley", subtext: "Havana • 11.1M", price: "$2,490", flag: "https://flagcdn.com/w320/cu.png", img: "https://brendansadventures.com/wp-content/uploads/2015/10/Landscape-Vinales-Cuba.jpg", lng: -80, lat: 21.5 },
    { code: "CY", title: "Cyprus", text: "Ayia Napa & Troodos mountains", subtext: "Nicosia • 1.3M", price: "$2,090", flag: "https://flagcdn.com/w320/cy.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: 33, lat: 35 },
    { code: "CZ", title: "Czechia", text: "Prague Castle & Český Krumlov", subtext: "Prague • 10.8M", price: "$1,890", flag: "https://flagcdn.com/w320/cz.png", img: "https://images.squarespace-cdn.com/content/v1/609d3f1781f4a87463f238cb/1692302796055-97BM3S7YLYKRR1DEI2DS/image-asset.jpeg", lng: 15.5, lat: 49.75 },
    { code: "DK", title: "Denmark", text: "Nyhavn & Faroe cliffs", subtext: "Copenhagen • 5.9M", price: "$2,690", flag: "https://flagcdn.com/w320/dk.png", img: "https://media.istockphoto.com/id/1527223664/photo/the-island-of-kalsoy-hiking-to-kallur-lighthouse-faroe-islands.jpg?s=612x612&w=0&k=20&c=bqxKS3iocCPiKT1-1Fk9TXKkDG4wprpx0LBW9sp1-9o=", lng: 10, lat: 56 },
    { code: "DJ", title: "Djibouti", text: "Lake Assal & whale sharks", subtext: "Djibouti • 1.1M", price: "$2,890", flag: "https://flagcdn.com/w320/dj.png", img: "https://www.steppestravel.com/app/uploads/2019/06/panorama-of-lac-assal-djibouti.jpg", lng: 43, lat: 11.5 },
    { code: "DM", title: "Dominica", text: "Boiling Lake & Trafalgar Falls", subtext: "Roseau • 72K", price: "$3,490", flag: "https://flagcdn.com/w320/dm.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: -61.3333, lat: 15.4167 },
    { code: "DO", title: "Dominican Republic", text: "Saona Island & Samaná whales", subtext: "Santo Domingo • 11.2M", price: "$2,490", flag: "https://flagcdn.com/w320/do.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: -70.6667, lat: 19 },
    { code: "EC", title: "Ecuador", text: "Galápagos & Cotopaxi", subtext: "Quito • 18M", price: "$2,690", flag: "https://flagcdn.com/w320/ec.png", img: "https://cdn.kimkim.com/files/a/images/65a5b435f95f58aa09cd171c955b08601ee46486/original-f73615a8ef5f788406e003f489a83103.jpg", lng: -77.5, lat: -2 },
    { code: "EG", title: "Egypt", text: "Pyramids & Abu Simbel", subtext: "Cairo • 110M", price: "$1,490", flag: "https://flagcdn.com/w320/eg.png", img: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/501bfd52c889354ff389b3822666c3f02fe26785/big-edecad32632c9ba476a0e4f4620e0373.jpg", lng: 30, lat: 27 },
    { code: "SV", title: "El Salvador", text: "Santa Ana volcano & Joya de Cerén", subtext: "San Salvador • 6.5M", price: "$1,890", flag: "https://flagcdn.com/w320/sv.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: -88.9167, lat: 13.8333 },
    { code: "GQ", title: "Equatorial Guinea", text: "Bioko island & Monte Alén", subtext: "Malabo • 1.7M", price: "$3,990", flag: "https://flagcdn.com/w320/gq.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: 10, lat: 2 },
    { code: "ER", title: "Eritrea", text: "Dahlak islands & Asmara", subtext: "Asmara • 3.7M", price: "$2,190", flag: "https://flagcdn.com/w320/er.png", img: "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3022924508352841570", lng: 39, lat: 15 },
    { code: "EE", title: "Estonia", text: "Tallinn old town & Soomaa", subtext: "Tallinn • 1.3M", price: "$1,990", flag: "https://flagcdn.com/w320/ee.png", img: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1540814953538470", lng: 26, lat: 59 },
    { code: "SZ", title: "Eswatini", text: "Mlilwane & Hlane parks", subtext: "Mbabane • 1.2M", price: "$2,990", flag: "https://flagcdn.com/w320/sz.png", img: "https://img5.digsty.com/gW-026xR-UyL-kb0YyVAVn4C4COAIo1fIvXQilz-Ros/rs:fit:400:400:1/g:fp:0.5:0.5/aHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8wLzAwL1phYnJhc19pbl9NbGlsd2FuZV9XaWxkbGlmZV9TYW5jdHVhcnkuanBn.jpg", lng: 31.5, lat: -26.5 },
    { code: "ET", title: "Ethiopia", text: "Lalibela churches & Simien mountains", subtext: "Addis Ababa • 126M", price: "$1,890", flag: "https://flagcdn.com/w320/et.png", img: "https://faw-marketing.transforms.svdcdn.com/production/images/Rock-Church-Lalibela.jpg?w=1200&h=630&q=82&auto=format&fit=crop&crop=focalpoint&fp-x=0.486&fp-y=0.4048&dm=1601914777&s=15fac6a5585809bb4d103a717640ad17", lng: 38, lat: 8 },
    { code: "FJ", title: "Fiji", text: "Yasawa islands & coral reefs", subtext: "Suva • 930K", price: "$4,290", flag: "https://flagcdn.com/w320/fj.png", img: "https://www.scuba.com/blog/wp-content/uploads/2024/08/AdobeStock_416632180.jpeg", lng: 175, lat: -18 },
    { code: "FI", title: "Finland", text: "Lapland & thousands of lakes", subtext: "Helsinki • 5.5M", price: "$3,190", flag: "https://flagcdn.com/w320/fi.png", img: "https://www.nordictours.co.uk/Admin/Public/GetImage.ashx?width=1000&Format=jpg&DoNotUpscale=1&Compression=70&image=%2FFiles%2FImages%2FTrips%2FIndividuel%2F18+Finnland+-+Das+Land+der+1000+Seen%2FWEB_FI_Natur_1920x1000_Shutterstock-ID1028274760.jpg", lng: 26, lat: 64 },
    { code: "FR", title: "France", text: "Mont Blanc & lavender fields", subtext: "Paris • 68M", price: "$2,590", flag: "https://flagcdn.com/w320/fr.png", img: "http://media.cntraveler.com/photos/5cd1d044hXNA8L9QXe2_VXT3dmIl5cLMTzcI-u8gs-BA=", lng: 2, lat: 46 },
    { code: "PF", title: "French Polynesia", text: "Bora Bora overwater bungalows", subtext: "Papeete • 300K", price: "$6,990", flag: "https://flagcdn.com/w320/pf.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: -140, lat: -15 },
    { code: "GA", title: "Gabon", text: "Loango National Park & gorillas", subtext: "Libreville • 2.4M", price: "$4,490", flag: "https://flagcdn.com/w320/ga.png", img: "https://wildaid.org/wp-content/uploads/2022/11/DSC00494.jpg", lng: 11.75, lat: -1 },
    { code: "GM", title: "Gambia", text: "River Gambia & Kiang West", subtext: "Banjul • 2.8M", price: "$1,990", flag: "https://flagcdn.com/w320/gm.png", img: "https://afktravel.com/wp-content/uploads/2015/08/senegal-nature-normal.jpg", lng: -16.5667, lat: 13.4667 },
    { code: "GE", title: "Georgia", text: "Kazbegi & ancient wine region", subtext: "Tbilisi • 3.7M", price: "$1,690", flag: "https://flagcdn.com/w320/ge.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: 43.5, lat: 42 },
    { code: "DE", title: "Germany", text: "Neuschwanstein & Rhine Valley", subtext: "Berlin • 84M", price: "$2,190", flag: "https://flagcdn.com/w320/de.png", img: "https://www.istockphoto.com/photos/germany-landscape", lng: 9, lat: 51 },
    { code: "GH", title: "Ghana", text: "Cape Coast & Mole National Park", subtext: "Accra • 34M", price: "$1,990", flag: "https://flagcdn.com/w320/gh.png", img: "https://as1.ftcdn.net/jpg/03/11/84/90/360_F_311849036_rmBPdrJD5BirZQDcTUNmWXITLiVDAJBs.jpg", lng: -2, lat: 8 },
    { code: "GR", title: "Greece", text: "Santorini & Meteora", subtext: "Athens • 10.3M", price: "$2,390", flag: "https://flagcdn.com/w320/gr.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: 22, lat: 39 },
    { code: "GL", title: "Greenland", text: "Ilulissat Icefjord & aurora", subtext: "Nuuk • 56K", price: "$6,990", flag: "https://flagcdn.com/w320/gl.png", img: "https://cdn-kmfel.nitrocdn.com/uMVObCziJWycROCfTnqalPiKHatgnzNl/assets/images/optimized/rev-ff2a53f/polar-latitudes.com/wp-content/uploads/2025/07/northern-lights-featured.jpg", lng: -40, lat: 72 },
    { code: "GD", title: "Grenada", text: "Grand Anse & underwater sculpture", subtext: "St. George's • 125K", price: "$3,690", flag: "https://flagcdn.com/w320/gd.png", img: "https://media.istockphoto.com/id/1126733214/photo/beautiful-landscape-of-grenada-st-georges-town-view-from-the-ocean.jpg?s=612x612&w=0&k=20&c=yAIOInU6smePwFlJj2IoGJ6cSWd5ypoLEewK8EH4zrs=", lng: -61.6667, lat: 12.1167 },
    { code: "GU", title: "Guam", text: "Tumon Bay & Two Lovers Point", subtext: "Hagåtña • 170K", price: "$4,290", flag: "https://flagcdn.com/w320/gu.png", img: "https://assets.simpleviewinc.com/sv-guam/image/upload/c_limit,h_1200,q_75,w_1200/v1/cms_resources/clients/guam/BD_Guam_28_9a726636-2ce3-4,63e-b13d-c403e04d1041.jpg", lng: 144.7833, lat: 13.4667 },
    { code: "GT", title: "Guatemala", text: "Antigua & Lake Atitlán", subtext: "Guatemala City • 18M", price: "$2,190", flag: "https://flagcdn.com/w320/gt.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: -90.25, lat: 15.5 },
    { code: "GN", title: "Guinea", text: "Fouta Djallon & Îles de Los", subtext: "Conakry • 14M", price: "$1,990", flag: "https://flagcdn.com/w320/gn.png", img: "https://www.shutterstock.com/image-photo/beauty-tropical-landscape-oceania-top-260nw-1128511994.jpg", lng: -10, lat: 11 },
    { code: "GW", title: "Guinea-Bissau", text: "Bijagós Islands", subtext: "Bissau • 2.1M", price: "$2,290", flag: "https://flagcdn.com/w320/gw.png", img: "https://assets.vogue.com/photos/6414a211cf213f132c5f9b62/master/w_2560%2Cc_limit/GettyImages-1246265851.jpg", lng: -15, lat: 12 },
    { code: "GY", title: "Guyana", text: "Kaieteur Falls & Rupununi", subtext: "Georgetown • 810K", price: "$3,490", flag: "https://flagcdn.com/w320/gy.png", img: "https://i.natgeofe.com/n/facc03bd-378b-43fb-b960-dc7504b4429f/GettyImages-975223728_16x9.gif", lng: -59, lat: 5 },
    { code: "HT", title: "Haiti", text: "Citadelle & Labadee", subtext: "Port-au-Prince • 11.7M", price: "$1,990", flag: "https://flagcdn.com/w320/ht.png", img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/05/08/11/haitilandscape-0.jpg", lng: -72.4167, lat: 19 },
    { code: "HN", title: "Honduras", text: "Roatán & Copán ruins", subtext: "Tegucigalpa • 10.6M", price: "$2,290", flag: "https://flagcdn.com/w320/hn.png", img: "https://t3.ftcdn.net/jpg/03/97/07/32/360_F_397073232_Hq7LH1WqlxWc3ikDrxJOgtQwnCXdRmuY.jpg", lng: -86.5, lat: 15 },
    { code: "HK", title: "Hong Kong", text: "Victoria Peak & skyline", subtext: "Hong Kong • 7.5M", price: "$3,490", flag: "https://flagcdn.com/w320/hk.png", img: "https://earth.org/wp-content/uploads/2020/09/Webp.net-resizeimage-2020-09-02T095102.835.jpg", lng: 114.1667, lat: 22.25 },
    { code: "HU", title: "Hungary", text: "Budapest & Lake Balaton", subtext: "Budapest • 9.6M", price: "$1,890", flag: "https://flagcdn.com/w320/hu.png", img: "https://www.wanderlustchloe.com/wp-content/uploads/2022/07/landscapes-in-Italy.jpg", lng: 20, lat: 47 },
    { code: "IS", title: "Iceland", text: "Northern Lights & black sand beaches", subtext: "Reykjavík • 380K", price: "$4,490", flag: "https://flagcdn.com/w320/is.png", img: "https://www.tripspi.com/blog/the-beautiful-landscape-of-iceland-AoiJe9251Z", lng: -18, lat: 65 },
    { code: "IN", title: "India", text: "Taj Mahal & Varanasi ghats", subtext: "New Delhi • 1.44B", price: "$1,390", flag: "https://flagcdn.com/w320/in.png", img: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/95e0431c-b232-4481-a5ac-f6d09fd31c57-Manali-structuresxx.jpg", lng: 77, lat: 20 },
    { code: "ID", title: "Indonesia", text: "Borobudur & Komodo dragons", subtext: "Jakarta • 280M", price: "$1,990", flag: "https://flagcdn.com/w320/id.png", img: "https://media.istockphoto.com/id/1469116195/photo/rice-terrace-bali-indonesia.jpg?s=612x612&w=0&k=20&c=X49pcifcHBRmlgu1gCqN1lHgKb65jPAeuQjlAEvSYAc=", lng: 120, lat: -5 },
    { code: "IR", title: "Iran", text: "Isfahan & Persepolis", subtext: "Tehran • 89M", price: "$1,990", flag: "https://flagcdn.com/w320/ir.png", img: "https://orienttrips.com/mag/wp-content/uploads/2025/03/The-Terraced-Beauty-of-Badab-e-Surt-scaled.webp", lng: 53, lat: 32 },
    { code: "IQ", title: "Iraq", text: "Babylon ruins & Marshes", subtext: "Baghdad • 45M", price: "$2,490", flag: "https://flagcdn.com/w320/iq.png", img: "https://beyondthebucketlist.co/wp-content/uploads/2022/09/DSC_0570.jpg", lng: 44, lat: 33 },
    { code: "IE", title: "Ireland", text: "Cliffs of Moher & Ring of Kerry", subtext: "Dublin • 5.1M", price: "$2,690", flag: "https://flagcdn.com/w320/ie.png", img: "https://images.ireland.com/media/Images/amazing-landscapes/5079b776bd3645da95169ccd51f4278d.jpg", lng: -8, lat: 53 },
    { code: "IL", title: "Israel", text: "Dead Sea & Jerusalem", subtext: "Jerusalem • 9.8M", price: "$3,290", flag: "https://flagcdn.com/w320/il.png", img: "https://media.istockphoto.com/id/587203352/photo/dead-sea-seashore-with-palm-trees-and-mountains-on-background.jpg?s=612x612&w=0&k=20&c=MTU8ZXWopNT1JTI-iwGBRDjZ8G3oWRL9PC9EAzwE5Kw=", lng: 34.75, lat: 31.5 },
    { code: "IT", title: "Italy", text: "Amalfi Coast & Dolomites", subtext: "Rome • 59M", price: "$2,690", flag: "https://flagcdn.com/w320/it.png", img: "https://media.cntraveler.com/photos/59f262b3f717c35d28fabb17/master/pass/Lacul-Rosu-GettyImages-517583628.jpg", lng: 12.8333, lat: 42.8333 },
    { code: "JM", title: "Jamaica", text: "Negril & Blue Mountains", subtext: "Kingston • 2.8M", price: "$2,990", flag: "https://flagcdn.com/w320/jm.png", img: "https://www.sandals.com/blog/content/images/2020/01/Frenchman-Cove-Jamaica.jpg", lng: -77.5, lat: 18.25 },
    { code: "JP", title: "Japan", text: "Mount Fuji & Kyoto temples", subtext: "Tokyo • 125M", price: "$3,290", flag: "https://flagcdn.com/w320/jp.png", img: "https://www.tripspi.com/blog/the-beautiful-landscape-of-japan-60ewipugMR", lng: 138, lat: 36 },
    { code: "JO", title: "Jordan", text: "Petra & Wadi Rum", subtext: "Amman • 11.3M", price: "$2,190", flag: "https://flagcdn.com/w320/jo.png", img: "https://jordanmw.com/jordan-is-a-beautiful-destination-for-those-who-wish-to-experience-the-beauty-of-the-desert/", lng: 36, lat: 31 },
    { code: "KZ", title: "Kazakhstan", text: "Almaty mountains & Charyn Canyon", subtext: "Nur-Sultan • 19.8M", price: "$1,890", flag: "https://flagcdn.com/w320/kz.png", img: "https://media.istockphoto.com/id/1805736959/photo/valley-of-lakes-in-the-kensu-gorge-in-kazakhstan.jpg?s=612x612&w=0&k=20&c=er6Xqy6h99VSE_-WExpieD2bUqjqBPamegOfFquaTGM=", lng: 68, lat: 48 },
    { code: "KE", title: "Kenya", text: "Masai Mara migration & Lamu", subtext: "Nairobi • 55M", price: "$3,490", flag: "https://flagcdn.com/w320/ke.png", img: "https://www.originaltravel.co.uk/img/v2/export/mag/Img_4022_0.jpg", lng: 38, lat: 1 },
    { code: "KI", title: "Kiribati", text: "Christmas Island & coral atolls", subtext: "Tarawa • 130K", price: "$4,990", flag: "https://flagcdn.com/w320/ki.png", img: "https://as1.ftcdn.net/jpg/06/79/04/34/1000_F_679043448_Kvw4lxaIQ80IjsAJNzHRFYJIkEV7RwCK.jpg", lng: 173, lat: 1.4167 },
    { code: "KP", title: "North Korea", text: "Pyongyang & Mount Paektu", subtext: "Pyongyang • 26M", price: "Restricted", flag: "https://flagcdn.com/w320/kp.png", img: "https://christoph.today/wp-content/uploads/2018/12/44877125_2774942159198091_4856700549610864640_n.jpg", lng: 127, lat: 40 },
    { code: "KR", title: "South Korea", text: "Gyeongbokgung & Jeju", subtext: "Seoul • 51M", price: "$2,890", flag: "https://flagcdn.com/w320/kr.png", img: "https://media.cnn.com/api/v1/images/stellar/prod/130826153635-amazing-sights-boseong-tea-fields.jpg?q=w_1110,c_fill", lng: 127.5, lat: 37 },
    { code: "KW", title: "Kuwait", text: "Kuwait Towers & desert", subtext: "Kuwait City • 4.3M", price: "$2,690", flag: "https://flagcdn.com/w320/kw.png", img: "https://as1.ftcdn.net/jpg/02/48/13/16/1000_F_248131602_uUUYhzB8acbgFHr4mIn81aofi98UNxt7.jpg", lng: 47.6581, lat: 29.3375 },
    { code: "KG", title: "Kyrgyzstan", text: "Issyk-Kul & Tian Shan", subtext: "Bishkek • 6.8M", price: "$1,690", flag: "https://flagcdn.com/w320/kg.png", img: "https://static.wixstatic.com/media/846d71_5a4f1315ee384add837ec35768797597~mv2_d_1920_1281_s_2.jpg/v1/fill/w_980,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/846d71_5a4f1315ee384add837ec35768797597~mv2_d_1920_1281_s_2.jpg", lng: 75, lat: 41 },
    { code: "LA", title: "Laos", text: "Luang Prabang & 4000 Islands", subtext: "Vientiane • 7.6M", price: "$1,590", flag: "https://flagcdn.com/w320/la.png", img: "https://www.we12travel.com/wp-content/uploads/2020/04/Blanktjarn-Valadalen-scaled.jpg", lng: 105, lat: 18 },
    { code: "LV", title: "Latvia", text: "Riga & Gauja National Park", subtext: "Riga • 1.8M", price: "$1,890", flag: "https://flagcdn.com/w320/lv.png", img: "https://media.cnn.com/api/v1/images/stellar/prod/190819170209-beautiful-places-in-latvia-kuldiga-4.jpg?q=w_1110,c_fill", lng: 25, lat: 57 },
    { code: "LB", title: "Lebanon", text: "Beirut & Baalbek ruins", subtext: "Beirut • 5.3M", price: "$2,190", flag: "https://flagcdn.com/w320/lb.png", img: "https://t3.ftcdn.net/jpg/01/06/83/52/360_F_106835237_dDL6qKwEchd4BR5v0OhYyIxgPqW5qtkJ.jpg", lng: 35.8333, lat: 33.8333 },
    { code: "LS", title: "Lesotho", text: "Sani Pass & Maletsunyane Falls", subtext: "Maseru • 2.3M", price: "$2,490", flag: "https://flagcdn.com/w320/ls.png", img: "https://www.africanbudgetsafaris.com/images/abs-destinations/44/maletsunyane_falls_lesotho__1200w.jpg", lng: 28.5, lat: -29.5 },
    { code: "LR", title: "Liberia", text: "Sapo National Park & beaches", subtext: "Monrovia • 5.4M", price: "$2,190", flag: "https://flagcdn.com/w320/lr.png", img: "https://www.shutterstock.com/image-photo/beautiful-waterfall-llanos-de-cortez-260nw-1594559821.jpg", lng: -9.5, lat: 6.5 },
    { code: "LY", title: "Libya", text: "Leptis Magna & Sahara", subtext: "Tripoli • 6.8M", price: "$2,390", flag: "https://flagcdn.com/w320/ly.png", img: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=843287052898075", lng: 17, lat: 25 },
    { code: "LI", title: "Liechtenstein", text: "Vaduz Castle & Alps", subtext: "Vaduz • 40K", price: "$2,990", flag: "https://flagcdn.com/w320/li.png", img: "https://www.mirygiramondo.com/wp-content/uploads/2024/06/castle-7581503_1920.jpg", lng: 9.5333, lat: 47.1667 },
    { code: "LT", title: "Lithuania", text: "Trakai Castle & Curonian Spit", subtext: "Vilnius • 2.8M", price: "$1,890", flag: "https://flagcdn.com/w320/lt.png", img: "https://ctdots.eu/wp-content/uploads/2021/08/neman-loops-birstonas-lithuania.jpg", lng: 24, lat: 56 },
    { code: "LU", title: "Luxembourg", text: "Vianden & Müllerthal", subtext: "Luxembourg • 660K", price: "$2,690", flag: "https://flagcdn.com/w320/lu.png", img: "https://media.istockphoto.com/id/1151600434/photo/sure-river-in-lultzhausen-esch-sur-sure-luxembourg-beautiful-landscape-with-green-mountains.jpg?s=612x612&w=0&k=20&c=tqn_xniiJHYjzXLhktTYtaCOlWs4anA4USC0qF0p5rM=", lng: 6.1667, lat: 49.75 },
    { code: "MO", title: "Macao", text: "Casinos & Portuguese heritage", subtext: "Macao • 700K", price: "$3,290", flag: "https://flagcdn.com/w320/mo.png", img: "https://as1.ftcdn.net/jpg/02/27/27/21/1000_F_227272115_w2xFf5du9eVqfqQWot8KO2DyLngpihnV.jpg", lng: 113.55, lat: 22.1667 },
    { code: "MK", title: "North Macedonia", text: "Ohrid Lake & Matka Canyon", subtext: "Skopje • 2.1M", price: "$1,590", flag: "https://flagcdn.com/w320/mk.png", img: "https://lp-cms-production.imgix.net/2025-03/shutterstockRF197537735.jpg?auto=format,compress&q=72&fit=crop", lng: 22, lat: 41.8333 },
    { code: "MG", title: "Madagascar", text: "Baobab Avenue & tsingy", subtext: "Antananarivo • 30M", price: "$3,490", flag: "https://flagcdn.com/w320/mg.png", img: "https://jenmansafaris.com/wp-content/uploads/2017/09/travel-2328347-1600x824.jpg", lng: 47, lat: -20 },
    { code: "MW", title: "Malawi", text: "Lake Malawi & Nyika Plateau", subtext: "Lilongwe • 21M", price: "$2,690", flag: "https://flagcdn.com/w320/mw.png", img: "https://static.wixstatic.com/media/b4fa82_9b8e4e8405f94079b510c4181d2c3c1a~mv2.jpeg/v1/fill/w_568,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b4fa82_9b8e4e8405f94079b510c4181d2c3c1a~mv2.jpeg", lng: 34, lat: -13.5 },
    { code: "MY", title: "Malaysia", text: "Petronas Towers & Borneo", subtext: "Kuala Lumpur • 34M", price: "$2,190", flag: "https://flagcdn.com/w320/my.png", img: "https://media.cntraveler.com/photos/5a02479d97dfd836a831a41e/16:9/w_3600,h_2025,c_limit/cameron-highlands-GettyImages-174630125.jpg", lng: 112.5, lat: 2.5 },
    { code: "MV", title: "Maldives", text: "Overwater villas & atolls", subtext: "Malé • 520K", price: "$5,990", flag: "https://flagcdn.com/w320/mv.png", img: "https://t3.ftcdn.net/jpg/03/34/77/78/360_F_334777839_Y7Y5P8FFY5WFo7sTwjeT0vxDbTGxhIo5.jpg", lng: 73, lat: 3.25 },
    { code: "ML", title: "Mali", text: "Timbuktu & Dogon Country", subtext: "Bamako • 23M", price: "$2,290", flag: "https://flagcdn.com/w320/ml.png", img: "https://as1.ftcdn.net/jpg/01/38/98/56/1000_F_138985659_PoCndcBhkwW7rS0duXz8YRHldtEgsWY7.jpg", lng: -4, lat: 17 },
    { code: "MT", title: "Malta", text: "Valletta & Blue Lagoon", subtext: "Valletta • 520K", price: "$2,490", flag: "https://flagcdn.com/w320/mt.png", img: "https://t3.ftcdn.net/jpg/02/40/38/18/360_F_240381886_Qc8LpYOPPbGuMjN6TfP8Jp3djv6OcL8t.jpg", lng: 14.5833, lat: 35.8333 },
    { code: "MH", title: "Marshall Islands", text: "Majuro atoll & Bikini", subtext: "Majuro • 42K", price: "$4,990", flag: "https://flagcdn.com/w320/mh.png", img: "https://5d6d6de8.delivery.rocketcdn.me/wp-content/uploads/2021/07/marshall-islands2.jpg", lng: 168, lat: 9 },
    { code: "MR", title: "Mauritania", text: "Banc d'Arguin & Richat Structure", subtext: "Nouakchott • 4.9M", price: "$2,590", flag: "https://flagcdn.com/w320/mr.png", img: "https://media.istockphoto.com/id/623197898/photo/panorama-of-rocky-pond-on-adrar-plateau-mauritania.jpg?s=612x612&w=0&k=20&c=6OA51GpmTVMPLLcA0oL8U0ymyIgeHmVDTHIoRmGi5aA=", lng: -12, lat: 20 },
    { code: "MU", title: "Mauritius", text: "Le Morne & Chamarel", subtext: "Port Louis • 1.3M", price: "$3,990", flag: "https://flagcdn.com/w320/mu.png", img: "https://as2.ftcdn.net/jpg/02/27/27/21/1000_F_227272115_w2xFf5du9eVqfqQWot8KO2DyLngpihnV.jpg", lng: 57.55, lat: -20.2833 },
    { code: "MX", title: "Mexico", text: "Chichen Itza & Tulum", subtext: "Mexico City • 128M", price: "$2,190", flag: "https://flagcdn.com/w320/mx.png", img: "https://www.solosholidays.com/us/most-beautiful-places-in-mexico-to-visit/", lng: -102, lat: 23 },
    { code: "FM", title: "Micronesia", text: "Chuuk Lagoon & Yap stone money", subtext: "Palikir • 115K", price: "$4,990", flag: "https://flagcdn.com/w320/fm.png", img: "https://blueskyluxurytravels.com/bl-content/uploads/pages/7c4e8b4e1a46b46/2-bluesky-luxury-travels-belize-beaches-blue-hole.jpg", lng: 158.25, lat: 6.9167 },
    { code: "MD", title: "Moldova", text: "Chișinău wineries", subtext: "Chișinău • 2.5M", price: "$1,490", flag: "https://flagcdn.com/w320/md.png", img: "https://www.shutterstock.com/image-photo/beautiful-waterfall-llanos-de-cortez-260nw-1594559821.jpg", lng: 29, lat: 47 },
    { code: "MC", title: "Monaco", text: "Monte Carlo & Port Hercule", subtext: "Monaco • 39K", price: "$5,990", flag: "https://flagcdn.com/w320/mc.png", img: "https://www.thewanderinglens.com/wp-content/uploads/2016/04/Monaco250header.jpg", lng: 7.4, lat: 43.7333 },
    { code: "MN", title: "Mongolia", text: "Gobi Desert & Ulaanbaatar", subtext: "Ulaanbaatar • 3.5M", price: "$2,490", flag: "https://flagcdn.com/w320/mn.png", img: "https://www.africansafarimag.com/wp-content/uploads/2017/09/travel-2328347-1600x824.jpg", lng: 105, lat: 46 },
    { code: "ME", title: "Montenegro", text: "Kotor Bay & Tara Canyon", subtext: "Podgorica • 620K", price: "$1,990", flag: "https://flagcdn.com/w320/me.png", img: "https://www.montenegroconcierge.com/images/photo/link-share-photos/nature-attractions-montenegro-mediterranean-destinations-places-to-visit-in-montenegro-biogradsko-lake.jpg", lng: 19, lat: 42 },
    { code: "MA", title: "Morocco", text: "Marrakech & Sahara", subtext: "Rabat • 38M", price: "$1,890", flag: "https://flagcdn.com/w320/ma.png", img: "https://wander-lush.org/wp-content/uploads/2022/12/Most-beautiful-places-in-Morocco-DP-Ait-Benhaddou.jpg", lng: -5, lat: 32 },
    { code: "MZ", title: "Mozambique", text: "Bazaruto & Vilanculos", subtext: "Maputo • 34M", price: "$2,990", flag: "https://flagcdn.com/w320/mz.png", img: "https://media.istockphoto.com/id/831606046/photo/inselbergs-of-northern-mozambique.jpg?s=612x612&w=0&k=20&c=rjO7PGHomuSTGCv_2cTygSDZnMgmzOILTHrTH= ", lng: 35, lat: -18.25 },
    { code: "MM", title: "Myanmar", text: "Bagan temples & Inle Lake", subtext: "Naypyidaw • 54M", price: "$1,990", flag: "https://flagcdn.com/w320/mm.png", img: "https://media.istockphoto.com/id/1442452373/photo/beautiful-colorful-village-in-myanmar.jpg?s=612x612&w=0&k=20&c=ZKzBDPXWv1YUmpCdEq5uE4_biduQ4WGbTHr9evPIMiI=", lng: 98, lat: 22 },
    { code: "NA", title: "Namibia", text: "Sossusvlei & Etosha Pan", subtext: "Windhoek • 2.7M", price: "$4,490", flag: "https://flagcdn.com/w320/na.png", img: "https://africageographic.com/wp-content/uploads/2019/11/Namibia_02.jpg", lng: 17, lat: -22 },
    { code: "NR", title: "Nauru", text: "Phosphate cliffs & lagoon", subtext: "Yaren • 13K", price: "$5,990", flag: "https://flagcdn.com/w320/nr.png", img: "https://thumbs.dreamstime.com/b/gambia-mangroves-aerial-view-mangrove-forest-photo-made-drone-above-africa-natural-landscape-165028654.jpg", lng: 166.9167, lat: -0.5333 },
    { code: "NP", title: "Nepal", text: "Everest & Annapurna", subtext: "Kathmandu • 31M", price: "$1,890", flag: "https://flagcdn.com/w320/np.png", img: "https://static.wixstatic.com/media/a1937e_b40008f195a54073b94cb0e56cadbd5c~mv2.png/v1/fill/w_837,h_553,al_c,q_90/a1937e_b40008f195a54073b94cb0e56cadbd5c~mv2.png", lng: 84, lat: 28 },
    { code: "NL", title: "Netherlands", text: "Keukenhof & windmills", subtext: "Amsterdam • 17.8M", price: "$2,390", flag: "https://flagcdn.com/w320/nl.png", img: "https://www.holland.com/upload_mm/0/0/c/83717_fullimage_walker%20crossing%20bridge%20over%20river%20in%20dutch%20countryside%20national%20park%20landscape%20the%20drentsche%20aa%20%C2%A9%20rudmer%20zwerver_1150x663.jpg", lng: 5.75, lat: 52.5 },
    { code: "NZ", title: "New Zealand", text: "Milford Sound & Tongariro", subtext: "Wellington • 5.2M", price: "$4,490", flag: "https://flagcdn.com/w320/nz.png", img: "https://www.womplestudios.com/cdn/shop/articles/hero_image_47a26068-03d4-4efe-9fcd-d65f97698b88.jpg?v=1688008690", lng: 174, lat: -41 },
    { code: "NI", title: "Nicaragua", text: "Granada & Ometepe", subtext: "Managua • 7M", price: "$1,990", flag: "https://flagcdn.com/w320/ni.png", img: "https://www.wildfrontierstravel.com/media/cache/page_image_large/upload/cc/0e9e0620/concepcionvolcanoometepeislanddt.jpeg", lng: -85, lat: 13 },
    { code: "NE", title: "Niger", text: "Agadez & Aïr Mountains", subtext: "Niamey • 27M", price: "$2,290", flag: "https://flagcdn.com/w320/ne.png", img: "https://www.istockphoto.com/photos/niger", lng: 8, lat: 16 },
    { code: "NG", title: "Nigeria", text: "Lekki & Yankari", subtext: "Abuja • 223M", price: "$1,990", flag: "https://flagcdn.com/w320/ng.png", img: "https://www.historyofceylontea.com/images/Articles/media-articles/5-breathtaking-natural-landscapes-to-witness-in-Nigeria1.jpg", lng: 8, lat: 10 },
    { code: "NO", title: "Norway", text: "Lofoten & Trolltunga", subtext: "Oslo • 5.5M", price: "$3,990", flag: "https://flagcdn.com/w320/no.png", img: "https://www.greatvaluevacations.com/wp-content/uploads/2015/09/StKittsLandscape.jpg", lng: 10, lat: 62 },
    { code: "OM", title: "Oman", text: "Wahiba Sands & Nizwa Fort", subtext: "Muscat • 5.3M", price: "$3,290", flag: "https://flagcdn.com/w320/om.png", img: "https://www.goingthewholehogg.com/wp-content/uploads/Wadi-Bani-Khalid-morning-reflections-feat.jpg", lng: 57, lat: 21 },
    { code: "PK", title: "Pakistan", text: "Hunza & Badshahi Mosque", subtext: "Islamabad • 245M", price: "$1,490", flag: "https://flagcdn.com/w320/pk.png", img: "https://i.natgeofe.com/n/9ad480f8-ca3a-46b2-842d-889d93afc43e/deosai-national-park-pakistan.jpg", lng: 70, lat: 30 },
    { code: "PW", title: "Palau", text: "Rock Islands & Jellyfish Lake", subtext: "Ngerulmud • 18K", price: "$5,990", flag: "https://flagcdn.com/w320/pw.png", img: "https://www.shutterstock.com/image-photo/rock-islands-palau-micronesia-helicopter-260nw-2536158833.jpg", lng: 134.5, lat: 7.5 },
    { code: "PS", title: "Palestine", text: "Jerusalem & Bethlehem", subtext: "Ramallah • 5.5M", price: "$2,490", flag: "https://flagcdn.com/w320/ps.png", img: "https://t3.ftcdn.net/jpg/03/86/91/26/360_F_386912646_pw9GXjSrNk1h58CbnZ9451sP25BtbZdH.jpg", lng: 35.25, lat: 32 },
    { code: "PA", title: "Panama", text: "Panama Canal & San Blas", subtext: "Panama City • 4.5M", price: "$2,690", flag: "https://flagcdn.com/w320/pa.png", img: "https://media.istockphoto.com/id/1359181310/photo/cerro-punta-chiriqui-panama.jpg?s=612x612&w=0&k=20&c=GDj4iQCnX53oNu5g1ZRiWa7oK71gTHrTH= ", lng: -80, lat: 9 },
    { code: "PG", title: "Papua New Guinea", text: "Kokoda & Sepik River", subtext: "Port Moresby • 10M", price: "$4,990", flag: "https://flagcdn.com/w320/pg.png", img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/12/18/10/papua.jpg", lng: 147, lat: -6 },
    { code: "PY", title: "Paraguay", text: "Jesuit Missions & Chaco", subtext: "Asunción • 6.8M", price: "$1,990", flag: "https://flagcdn.com/w320/py.png", img: "https://media.istockphoto.com/id/1435114995/photo/aerial-view-of-the-ybytyruzu-mountains-with-the-flat-plain-below-in-paraguay-from-a-height-of.jpg?s=612x612&w=0&k=20&c=t6J0xgohVSmBQAmR_Tk8c6ukBas2__tJV6aBXSCPryY=", lng: -58, lat: -23 },
    { code: "PE", title: "Peru", text: "Machu Picchu & Amazon", subtext: "Lima • 34M", price: "$2,490", flag: "https://flagcdn.com/w320/pe.png", img: "https://www.machupicchu.org/wp-content/uploads/Perus-most-beautiful-destinations.jpg", lng: -76, lat: -10 },
    { code: "PH", title: "Philippines", text: "Palawan & Boracay", subtext: "Manila • 115M", price: "$2,190", flag: "https://flagcdn.com/w320/ph.png", img: "https://media.cntraveller.com/photos/613627801e4d98503df89b27/master/w_1600%2Cc_limit/CMS_06_Bicol.jpg", lng: 122, lat: 13 },
    { code: "PL", title: "Poland", text: "Kraków & Tatras", subtext: "Warsaw • 38M", price: "$1,890", flag: "https://flagcdn.com/w320/pl.png", img: "https://static.wixstatic.com/media/a1937e_b40008f195a54073b94cb0e56cadbd5c~mv2.png/v1/fill/w_837,h_553,al_c,q_90/a1937e_b40008f195a54073b94cb0e56cadbd5c~mv2.png", lng: 20, lat: 52 },
    { code: "PT", title: "Portugal", text: "Sintra & Algarve cliffs", subtext: "Lisbon • 10.5M", price: "$2,290", flag: "https://flagcdn.com/w320/pt.png", img: "https://www.portugalhomes.com/uploads/sete-cidades-sao-miguel-azores_1713532805.webp", lng: -8, lat: 39.5 },
    { code: "QA", title: "Qatar", text: "Doha skyline & desert", subtext: "Doha • 3M", price: "$3,690", flag: "https://flagcdn.com/w320/qa.png", img: "https://media.istockphoto.com/id/1347547789/photo/the-beautiful-newly-developing-city-with-many-skyscrapers-shot-during-sunrise.jpg?s=612x612&w=0&k=20&c=4NviPxq03DHs60WuHnwWbbt_lg7fJBo-vaE4qXUI1NY=", lng: 51.25, lat: 25.5 },
    { code: "RO", title: "Romania", text: "Transfăgărășan & Bran Castle", subtext: "Bucharest • 19M", price: "$1,790", flag: "https://flagcdn.com/w320/ro.png", img: "https://media.cntraveler.com/photos/59f262b3f717c35d28fabb17/master/pass/Lacul-Rosu-GettyImages-517583628.jpg", lng: 25, lat: 46 },
    { code: "RU", title: "Russia", text: "Lake Baikal & Saint Basil’s", subtext: "Moscow • 144M", price: "$2,190", flag: "https://flagcdn.com/w320/ru.png", img: "https://mf.b37mrtl.ru/rbthmedia/images/2020.10/article/5f9c121585600a79605e68d7.jpg", lng: 100, lat: 60 },
    { code: "RW", title: "Rwanda", text: "Volcanoes & Lake Kivu", subtext: "Kigali • 14M", price: "$4,290", flag: "https://flagcdn.com/w320/rw.png", img: "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3603107217985823101", lng: 30, lat: -2 },
    { code: "KN", title: "Saint Kitts and Nevis", text: "Brimstone Hill & beaches", subtext: "Basseterre • 48K", price: "$4,490", flag: "https://flagcdn.com/w320/kn.png", img: "https://dtmag.com/wp-content/uploads/2015/09/StKittsLandscape.jpg", lng: -62.75, lat: 17.3333 },
    { code: "LC", title: "Saint Lucia", text: "Pitons & Sulphur Springs", subtext: "Castries • 180K", price: "$4,290", flag: "https://flagcdn.com/w320/lc.png", img: "https://www.royalcaribbean.com/media-assets/pmc/content/dam/shore-x/castries-slu/slk3-panoramic-st-lucia/stock-photo-castries-st-lucia-eastern-caribbean-1260908473.jpg?w=1920", lng: -61.1333, lat: 13.8833 },
    { code: "VC", title: "Saint Vincent and the Grenadines", text: "Tobago Cays & La Soufrière", subtext: "Kingstown • 103K", price: "$4,690", flag: "https://flagcdn.com/w320/vc.png", img: "https://media.istockphoto.com/id/1051588002/photo/sea-and-palm-trees-in-saint-vincent.jpg?s=612x612&w=0&k=20&c=qHBC456ZKr4XpBHzsv8kSyMq1rpVbDCjTHr9evPIMiI=", lng: -61.2, lat: 13.25 },
    { code: "WS", title: "Samoa", text: "To Sua trench & beaches", subtext: "Apia • 225K", price: "$4,490", flag: "https://flagcdn.com/w320/ws.png", img: "https://media.istockphoto.com/id/949400730/photo/tropical-beach-with-with-coconut-palm-trees-and-beach-houses-on-samoa-upolu.jpg?s=612x612&w=0&k=20&c=nY9vdMPM1maL0Z2LB9rPIrM1iBif4koMXd9R0i41DCQ=", lng: -172.3333, lat: -13.5833 },
    { code: "SM", title: "San Marino", text: "Guaita Tower & medieval walls", subtext: "San Marino • 34K", price: "$2,690", flag: "https://flagcdn.com/w320/sm.png", img: "https://www.fodors.com/wp-content/uploads/2021/05/ZimbabweWonders__HERO_shutterstock_478565950.jpg", lng: 12.4167, lat: 43.7667 },
    { code: "ST", title: "Sao Tome and Principe", text: "Pico Cão Grande & beaches", subtext: "São Tomé • 230K", price: "$3,990", flag: "https://flagcdn.com/w320/st.png", img: "https://www.outlooktravelmag.com/media/sao-tome-and-principe-1-1587120121.profileImage.2x-jpg-webp.webp", lng: 7, lat: 1 },
    { code: "SA", title: "Saudi Arabia", text: "AlUla & Edge of the World", subtext: "Riyadh • 37M", price: "$3,290", flag: "https://flagcdn.com/w320/sa.png", img: "https://images.goway.com/production/featured_images/saudi_arabia_wadi_disah_oasis_AdobeStock_560564857.jpg", lng: 45, lat: 25 },
    { code: "SN", title: "Senegal", text: "Pink Lake & Gorée Island", subtext: "Dakar • 18M", price: "$2,190", flag: "https://flagcdn.com/w320/sn.png", img: "https://afktravel.com/wp-content/uploads/2015/08/senegal-nature-normal.jpg", lng: -14, lat: 14 },
    { code: "RS", title: "Serbia", text: "Belgrade fortress & Tara Park", subtext: "Belgrade • 7.1M", price: "$1,690", flag: "https://flagcdn.com/w320/rs.png", img: "https://www.worldpackers.com/articles/beautiful-serbia", lng: 21, lat: 44 },
    { code: "SC", title: "Seychelles", text: "Anse Lazio & granite boulders", subtext: "Victoria • 100K", price: "$5,990", flag: "https://flagcdn.com/w320/sc.png", img: "https://www.jetsetteralerts.com/content/images/2025/10/Anse-Source-DArgent-Seychelles.webp", lng: 55.6667, lat: -4.5833 },
    { code: "SL", title: "Sierra Leone", text: "Banana Islands & beaches", subtext: "Freetown • 8.8M", price: "$2,290", flag: "https://flagcdn.com/w320/sl.png", img: "https://res.cloudinary.com/jerrick/image/upload/v1685221036/64726eac629450001d597144.jpg", lng: -11.5, lat: 8.5 },
    { code: "SG", title: "Singapore", text: "Marina Bay Sands & Gardens", subtext: "Singapore • 5.9M", price: "$3,990", flag: "https://flagcdn.com/w320/sg.png", img: "https://media.istockphoto.com/id/971597160/photo/singapore-cityscape-merlion.jpg?s=612x612&w=0&k=20&c=DrdxLNp_I31Mm7n1Ie-T254WudwmuSnNTHr9evPIMiI=", lng: 103.8, lat: 1.3667 },
    { code: "SK", title: "Slovakia", text: "High Tatras & Spiš Castle", subtext: "Bratislava • 5.4M", price: "$1,890", flag: "https://flagcdn.com/w320/sk.png", img: "https://www.wanderlustchloe.com/wp-content/uploads/2022/02/Most-beautiful-places-in-Slovakia-US-HERO.jpg", lng: 19.5, lat: 48.6667 },
    { code: "SI", title: "Slovenia", text: "Lake Bled & Triglav Park", subtext: "Ljubljana • 2.1M", price: "$2,290", flag: "https://flagcdn.com/w320/si.png", img: "https://www.regent-holidays.co.uk/upload-files/blog-sections/section-120_663.jpg", lng: 15, lat: 46 },
    { code: "SB", title: "Solomon Islands", text: "Marovo Lagoon & WWII relics", subtext: "Honiara • 730K", price: "$4,990", flag: "https://flagcdn.com/w320/sb.png", img: "https://www.seal-superyachts.com/wp-content/uploads/2018/09/Solomon-Islands-water.jpg", lng: 159, lat: -8 },
    { code: "SO", title: "Somalia", text: "Laas Geel & Indian Ocean coast", subtext: "Mogadishu • 18M", price: "Restricted", flag: "https://flagcdn.com/w320/so.png", img: "https://media.istockphoto.com/id/1051617300/photo/las-geel-somaliland-rocks-and-paintings.jpg?s=612x612&w=0&k=20&c=0ogp-G3cP5c_xyAzkDpFBh85cId4c60dTHIoRmGi5aA=", lng: 49, lat: 10 },
    { code: "ZA", title: "South Africa", text: "Table Mountain & Big Five", subtext: "Pretoria • 61M", price: "$3,290", flag: "https://flagcdn.com/w320/za.png", img: "https://www.roughguides.com/articles/the-scenic-beauty-of-south-africa/", lng: 24, lat: -29 },
    { code: "SS", title: "South Sudan", text: "Boma National Park", subtext: "Juba • 11M", price: "$2,990", flag: "https://flagcdn.com/w320/ss.png", img: "https://media.istockphoto.com/id/1207016461/photo/nile-river.jpg?s=612x612&w=0&k=20&c=I9bEO55FZYnzQpmkYKGKhBuZEK7KDScqTHr9evSqRY=", lng: 31, lat: 7 },
    { code: "ES", title: "Spain", text: "Sagrada Familia & Alhambra", subtext: "Madrid • 47M", price: "$2,390", flag: "https://flagcdn.com/w320/es.png", img: "https://www.tripspi.com/blog/the-beautiful-landscape-of-spain-DDgrGuOosb", lng: -4, lat: 40 },
    { code: "LK", title: "Sri Lanka", text: "Sigiriya & Yala safari", subtext: "Sri Jayawardenepura Kotte • 22M", price: "$1,890", flag: "https://flagcdn.com/w320/lk.png", img: "https://www.exodustravels.com/insights/5-top-sites-to-visit-sri-lanka", lng: 81, lat: 7 },
    { code: "SD", title: "Sudan", text: "Meroë pyramids & Nile", subtext: "Khartoum • 48M", price: "$2,190", flag: "https://flagcdn.com/w320/sd.png", img: "https://www.erikastravels.com/wp-content/uploads/2020/03/MEROE.jpg", lng: 31, lat: 15 },
    { code: "SR", title: "Suriname", text: "Paramaribo & rainforests", subtext: "Paramaribo • 600K", price: "$2,990", flag: "https://flagcdn.com/w320/sr.png", img: "https://media.istockphoto.com/id/1142516221/photo/dutch-colonial-architecture-in-paramaribo-suriname.jpg?s=612x612&w=0&k=20&c=YJXo9b1b0YJH5KXJ1f1YcXQX1Z1Z1Z1ZTHr9evPIMiI=", lng: -56, lat: 4 },
    { code: "SZ", title: "Eswatini", text: "Hlane Royal National Park", subtext: "Mbabane • 1.2M", price: "$3,290", flag: "https://flagcdn.com/w320/sz.png", img: "https://media.istockphoto.com/id/1142516221/photo/dutch-colonial-architecture-in-paramaribo-suriname.jpg?s=612x612&w=0&k=20&c=YJXo9b1b0YJH5KXJ1f1YcXQX1Z1Z1Z1ZTHr9evPIMiI=", lng: 31.5, lat: -26.5 },
];

// Buttons and forms
const BtnSignup = document.querySelector('#btn-signup');
const BtnLogin = document.querySelector('#btn-login');
const SignupForm = document.querySelector('.signup__form');
const BtnSignupClose = document.querySelector('.signup__close');
const LoginForm = document.querySelector('.login__form');
const BtnCloseLogin = document.querySelector('.login__close');
const Box = document.querySelector('.header__box');

// Hiperlinks
const HiperSignupLink = document.querySelector('.login__link');
const HiperLoginLink = document.querySelector('.signup__link');

// Input fields
const signupUsername = document.querySelector('.signup__input-name');
const signupEmail = document.querySelector('.signup__input-email');
const signupPassword = document.querySelector('.signup__input-password');

const loginEmail = document.querySelector('.login__input-email');
const loginPassword = document.querySelector('.login__input-password');

// Register div show/hide
const Register = document.querySelector('.register');
const Signup = document.querySelector('.signup');
const Login = document.querySelector('.login');

// Show/hide menu 
const Menu = document.querySelector('.header__menu');
const MenuText = document.querySelector('.header__menu-text');
const Logout = document.querySelector('.logout');

// Save Password, Name, Email and Country
let SaveEmail = '';
let SavePassword = '';
let SaveUsername = '';
let SaveCountry = '';

// book foorm validation patterns
const book = document.querySelector('.book');
const bookBtn = document.querySelector('#book-btn');
const bookName = document.querySelector('.book__input-name');
const bookEmail = document.querySelector('.book__input-email');
const bookPhone = document.querySelector('.book__input-phone');
const bookDestination = document.querySelector('.book__input-destination');
const bookDate = document.querySelector('.book__input-date');
const bookCountry = document.querySelector('#result');
const bookForm = document.querySelector('.book__form');
const bookClose = document.querySelector('.book__close');

// RegEx patterns
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const phonePattern = /^\+?[0-9]{7,15}$/;

// Random number generator
let random = 0;

// Cards container
const cards = document.querySelector('.cards');
const More = document.querySelector('.more');

// card add 
for (let i = 0; i < 6; i++){
    random = Math.floor(Math.random() * countries.length);
    cards.innerHTML += `
    <div class="card">
        <div class="card_img">
            <img src="${countries[random].img}" alt="">
        </div>
        <div class="card_content">
            <h3 class="card_title">${countries[random].title}</h3>
            <p class="card_text">${countries[random].text}</p>
            <button class="card_btn">Learn More</button>
        </div>
    </div>
    `;
}

const cardButtons = document.querySelector('.card_btn');

cardButtons.addEventListener('click', () => {
    const cardTitle = document.querySelector('.card_title').textContent.trim();
    More.style.display = 'flex';
});

// Show signup form
BtnSignup.addEventListener('click', () => {
    Register.style.display = 'flex';
    Signup.style.display = 'flex';
    Signup.style.transition = 'all 1s ease-in-out';
    setTimeout(() => {
        Signup.style.left = '0%';
    }, 500);
});

// Close signup form
BtnSignupClose.addEventListener('click', () => {
    Signup.style.left = '-100%';
    setTimeout(() => {
        Register.style.display = 'none';
        Signup.style.display = 'none';
    }, 500);
});

// Show login form
BtnLogin.addEventListener('click', () => {
    Register.style.display = 'flex';
    Login.style.display = 'flex';
    Login.style.transition = 'all 1s ease-in-out';
    setTimeout(() => {
        Login.style.right = '50%';
        Login.style.cssText += 'transform: translateX(50%);';
    }, 500);
});

// Close login form
BtnCloseLogin.addEventListener('click', () => {
    Login.style.right = '-100%';
    setTimeout(() => {
        Register.style.display = 'none';
        Login.style.display = 'none';
    }, 500);
});

// Switch to signup form
HiperSignupLink.addEventListener('click', () => {
    Login.style.right = '-100%';
    setTimeout(() => {
        Login.style.display = 'none';
        Signup.style.display = 'flex';
        Signup.style.left = '-100%';
        setTimeout(() => {
            Signup.style.left = '0%';
        }, 100);
    }, 500);
});

// Switch to login form
HiperLoginLink.addEventListener('click', () => {
    Signup.style.left = '-100%';
    setTimeout(() => {
        Signup.style.display = 'none';
        Login.style.display = 'flex';
        Login.style.right = '-100%';
        setTimeout(() => {
            Login.style.right = '50%';
            Login.style.cssText += 'transform: translateX(50%);';
        }, 100);
    }, 500);
});

// Validate signup form
SignupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    if (signupUsername.value.trim() === '') {
        signupUsername.style.border = '2px solid red';
        signupUsername.style.boxShadow = '0 0 5px red';
        signupUsername.style.tranform = 'scale(1.02)';
        signupUsername.style.transition = 'all 0.3s ease-in-out';
        valid = false;
    }else {
        signupUsername.style.border = 'none';
        signupUsername.style.boxShadow = 'none';
        signupUsername.style.tranform = 'scale(1)';
        signupUsername.style.transition = 'all 0.3s ease-in-out';
    }

    if (!emailPattern.test(signupEmail.value.trim())) {
        signupEmail.style.border = '2px solid red';
        signupEmail.style.boxShadow = '0 0 5px red';
        signupEmail.style.tranform = 'scale(1.02)';
        signupEmail.style.transition = 'all 0.3s ease-in-out';
        valid = false;
    }else {
        signupEmail.style.border = 'none';
        signupEmail.style.boxShadow = 'none';
        signupEmail.style.tranform = 'scale(1)';
        signupEmail.style.transition = 'all 0.3s ease-in-out';
    }

    if (!passwordPattern.test(signupPassword.value.trim())) {
        signupPassword.style.border = '2px solid red';
        signupPassword.style.boxShadow = '0 0 5px red';
        signupPassword.style.tranform = 'scale(1.02)';
        signupPassword.style.transition = 'all 0.3s ease-in-out';
        valid = false;
    }else {
        signupPassword.style.border = 'none';
        signupPassword.style.boxShadow = 'none';
        signupPassword.style.tranform = 'scale(1)';
        signupPassword.style.transition = 'all 0.3s ease-in-out';
    }

    if (!valid) {
        e.preventDefault();
        return;
    }
    signupUsername.style.border = 'none';
    signupEmail.style.border = 'none';
    signupPassword.style.border = 'none';
    signupUsername.style.boxShadow = 'none';
    signupEmail.style.boxShadow = 'none';
    signupPassword.style.boxShadow = 'none';
    signupUsername.style.tranform = 'scale(1)';
    signupEmail.style.tranform = 'scale(1)';
    signupPassword.style.tranform = 'scale(1)';
    signupUsername.style.transition = 'all 0.3s ease-in-out';
    signupEmail.style.transition = 'all 0.3s ease-in-out';
    signupPassword.style.transition = 'all 0.3s ease-in-out';
    SaveEmail = signupEmail.value.trim();
    SavePassword = signupPassword.value.trim();
    SaveUsername = signupUsername.value.trim();
    signupUsername.value = '';
    signupEmail.value = '';
    signupPassword.value = '';
    Signup.style.left = '-100%';
    Register.style.opasity = '0';
    Signup.style.transition = 'all 1s ease-in-out';
    Register.style.transition = 'all 1s ease-in-out';
    Menu.style.display = 'flex';
    Box.style.display = 'none';

    setTimeout(() => {
        Register.style.display = 'none';
        Signup.style.display = 'none';  
    }, 500);
});

// Validate login form
LoginForm.addEventListener('submit', (e) => {
    let valid = true;

    if (!emailPattern.test(loginEmail.value.trim())) {
        loginEmail.style.border = '2px solid red';
        loginEmail.style.boxShadow = '0 0 5px red';
        loginEmail.style.tranform = 'scale(1.02)';
        loginEmail.style.transition = 'all 0.3s ease-in-out';
        valid = false;
    }

    if (loginPassword.value.trim() === '') {
        loginPassword.style.border = '2px solid red';
        loginPassword.style.boxShadow = '0 0 5px red';
        loginPassword.style.tranform = 'scale(1.02)';
        loginPassword.style.transition = 'all 0.3s ease-in-out';
        valid = false;
    }

    if (!valid) {
        e.preventDefault();
        return;
    }

    loginEmail.style.border = 'none';
    loginPassword.style.border = 'none';
    loginEmail.style.boxShadow = 'none';
    loginPassword.style.boxShadow = 'none';
    loginEmail.style.tranform = 'scale(1)';
    loginPassword.style.tranform = 'scale(1)';
    loginEmail.style.transition = 'all 0.3s ease-in-out';
    loginPassword.style.transition = 'all 0.3s ease-in-out';
    SaveEmail = loginEmail.value.trim();
    SavePassword = loginPassword.value.trim();
    loginEmail.value = '';
    loginPassword.value = '';
    Login.style.right = '-100%';
    Register.style.opasity = '0';
    Login.style.transition = 'all 1s ease-in-out';
    Register.style.transition = 'all 1s ease-in-out';
    Box.style.display = 'none';
    Menu.style.display = 'flex';

    setTimeout(() => {
        Register.style.display = 'none';
        Login.style.display = 'none';
    }, 500);
});

// Toggle menu display
MenuText.addEventListener('click', () => {
    book.style.display = 'flex';
    bookEmail.value = SaveEmail;
    bookName.value = SaveUsername;
});

// Close book form
bookClose.addEventListener('click', () => {
    book.style.display = 'none';
});

// Validate book form
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    if (bookName.value.trim() === '') {
        bookName.style.border = '2px solid red';
        bookName.style.boxShadow = '0 0 5px red';
        bookName.style.tranform = 'scale(1.02)';
        bookName.style.transition = 'all 0.3s ease-in-out';
        valid = false;
    }else {
        bookName.style.border = 'none';
        bookName.style.boxShadow = 'none';
        bookName.style.tranform = 'scale(1)';
        bookName.style.transition = 'all 0.3s ease-in-out';
    }

    if (!emailPattern.test(bookEmail.value.trim())) {
        bookEmail.style.border = '2px solid red';
        bookEmail.style.boxShadow = '0 0 5px red';
        bookEmail.style.tranform = 'scale(1.02)';
        bookEmail.style.transition = 'all 0.3s ease-in-out';
        valid = false;
    }else {
        bookEmail.style.border = 'none';
        bookEmail.style.boxShadow = 'none';
        bookEmail.style.tranform = 'scale(1)';
        bookEmail.style.transition = 'all 0.3s ease-in-out';
    }

    if (!phonePattern.test(bookPhone.value.trim())) {
        bookPhone.style.border = '2px solid red';
        bookPhone.style.boxShadow = '0 0 5px red';
        bookPhone.style.tranform = 'scale(1.02)';
        bookPhone.style.transition = 'all 0.3s ease-in-out';
        valid = false;
    }else {
        bookPhone.style.border = 'none';
        bookPhone.style.boxShadow = 'none';
        bookPhone.style.tranform = 'scale(1)';
        bookPhone.style.transition = 'all 0.3s ease-in-out';
    }

    if (bookDestination.value.trim() === '') {
        bookDestination.style.border = '2px solid red';
        bookDestination.style.boxShadow = '0 0 5px red';
        bookDestination.style.tranform = 'scale(1.02)';
        bookDestination.style.transition = 'all 0.3s ease-in-out';
        valid = false;
    }else {
        bookDestination.style.border = 'none';
        bookDestination.style.boxShadow = 'none';
        bookDestination.style.tranform = 'scale(1)';
        bookDestination.style.transition = 'all 0.3s ease-in-out';
    }

    if (bookDate.value.trim() === '') {
        bookDate.style.border = '2px solid red';
        bookDate.style.boxShadow = '0 0 5px red';
        bookDate.style.tranform = 'scale(1.02)';
        bookDate.style.transition = 'all 0.3s ease-in-out';
        valid = false;
    }else {
        bookDate.style.border = 'none';
        bookDate.style.boxShadow = 'none';
        bookDate.style.tranform = 'scale(1)';
        bookDate.style.transition = 'all 0.3s ease-in-out';
    }   

    if (!valid) {
        e.preventDefault();
        return;
    }

    bookName.style.border = 'none';
    bookEmail.style.border = 'none';
    bookPhone.style.border = 'none';
    bookDestination.style.border = 'none';
    bookDate.style.border = 'none';
    bookCountry.style.border = 'none';

    bookName.style.boxShadow = 'none';
    bookEmail.style.boxShadow = 'none';
    bookPhone.style.boxShadow = 'none';
    bookDestination.style.boxShadow = 'none';
    bookDate.style.boxShadow = 'none';
    bookCountry.style.boxShadow = 'none';

    bookName.style.tranform = 'scale(1)';
    bookEmail.style.tranform = 'scale(1)';
    bookPhone.style.tranform = 'scale(1)';
    bookDestination.style.tranform = 'scale(1)';
    bookDate.style.tranform = 'scale(1)';
    bookCountry.style.tranform = 'scale(1)';

    bookName.style.transition = 'all 0.3s ease-in-out';
    bookEmail.style.transition = 'all 0.3s ease-in-out';
    bookPhone.style.transition = 'all 0.3s ease-in-out';
    bookDestination.style.transition = 'all 0.3s ease-in-out';
    bookDate.style.transition = 'all 0.3s ease-in-out';
    bookCountry.style.transition = 'all 0.3s ease-in-out';

    SaveCountry = bookCountry.value.trim();
    bookName.value = '';
    bookEmail.value = '';
    bookPhone.value = '';
    bookDestination.value = '';
    bookDate.value = '';
    bookCountry.value = '';

    book.style.display = 'none';
});

bookDestination.addEventListener('input', () => {
    const input = bookDestination.value.toLowerCase().trim();
    bookCountry.innerHTML = ''; // Clear previous options

    if (input === '') {
        bookCountry.style.display = 'none';
        return;
    }

    countries.forEach(country => {
        if (country.title.toLowerCase().includes(input)) {
            const option = document.createElement('option');
            option.value = country.title;
            option.textContent = country.title;
            option.classList.add('book__option');
            bookCountry.appendChild(option);
        }
    });

    if (bookCountry.options.length > 0) {
        bookCountry.style.display = 'block'; 
    } else {
        bookCountry.style.display = 'none';
    }
});

bookCountry.addEventListener('change', () => {
    bookDestination.value = bookCountry.value;
    bookCountry.innerHTML = '';
    bookCountry.style.display = 'none';
});

Logout.addEventListener('click', () => {
    Menu.style.display = 'none';
    Box.style.display = 'flex';
    SaveCountry = '';
    SaveEmail = '';
    SavePassword = '';
    SaveUsername = '';
    book.style.display = 'none';
    bookName.value = '';
    bookEmail.value = '';
    bookPhone.value = '';
    bookDestination.value = '';
    bookDate.value = '';
    bookCountry.value = '';
});
