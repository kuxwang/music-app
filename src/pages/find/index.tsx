import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "./components/banner";
import NavList from "components/nav-list";
import SectionTitle from "components/section-title";
import SongsCard from "components/songs-card";
import api from "api";
import { findIcons } from "getInfos/getData";
import { getRandomArrayElements } from "utils/getRandomArrayElements";

interface INavItemProps {
  icon: string;
  text: string;
  linkTo: string;
}
const navs: INavItemProps[] = findIcons();

interface IFindProps {}

const Find: React.FC<IFindProps> = (props) => {
  const [banners, setBanners] = useState<any[]>([]);
  const [songlist, setSongList] = useState<any[]>([]);

  const navigate = useNavigate();
  const navigateTo = (path: string) => navigate(path);

  useEffect(() => {
    api.bannerSwiperFn().then((res: any) => {
      setBanners(res.data.banners);
    });

    api.recSongListFn().then((res: any) => {
      console.log("推荐");
      console.log(res);
      const list = getRandomArrayElements(res.data.playlists, 9);
      setSongList(list);
    });

    // axios.get("/banner?type=1")
    // axios.get
  }, []);

  return (
    <div>
      <Banner items={banners} />
      <NavList list={navs} />
      <SectionTitle
        name="推荐歌单"
        right="歌单广场"
        handler={() => navigateTo("/home")}
      >
        <div className="grid grid-cols-3 gap-x-10  gap-y-15">
          {songlist.length > 0 &&
            songlist.map((item) => (
              <SongsCard item={item} key={item.id}></SongsCard>
            ))}
        </div>
      </SectionTitle>
      <SectionTitle
        name="新碟"
        desc="新歌"
        right="更多新碟"
        handler={() => navigateTo("/friend")}
      >
        2222
      </SectionTitle>
    </div>
  );
};

export default Find;
