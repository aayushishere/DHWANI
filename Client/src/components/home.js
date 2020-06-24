import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Search from "./search";
import SongList from "./songlist";
import { SongContext } from "../songContext";

const Home = () => {
  const { songText, songType } = useContext(SongContext);
  const [type, setType] = songType;
  const [text, setText] = songText;

  const [songArr, setSongArr] = useState([{}]);

  // const handleItemClick = () => {
  //   console.log("Hurrrdfasfaskjdfkjjhsdkfjky");
  // };
  const handleSearch = () => {
    const songarr = [
      {
        id: "asdassdadsassd",
        image:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8AnQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgQHAQIDAAj/xABDEAACAQMDAQQIAgYIBQUAAAABAgMABBEFEiEGEzFBURQiYXGBkaGxMtEVIzNCwfAHUnKCoqPh8TRik7LSJERjg5L/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/8QAJBEAAgIBAwUBAQEBAAAAAAAAAAECEQMSITEEExRBUSIyFQX/2gAMAwEAAhEDEQA/AFWLXnaYBVYknAA8TTLb3N/HF2kls6pjJORwPdStpy20HUQUMNrAiPPcGJH8M1acWmWMFt+vXtXxy7McfQ0mfLDG0lHk0YoSmm3IXtKvBqUk5Z2EcWFO04yx8KBaldzafqJhlPqfiRv6y+FTdVih0jRtZn0s7CW3rg5KlgFz8KVNI7a+6ened3ka1uQEd2JIVgMjJ9uDT41F/qtiEpSumxw0nqKG2JWeVQGIIPh8al3nVlsuI4Ju0kcgEqOBSMkIaSOMOqgnG9zhR76kDT8uNt/aF/3Qpdj8MLV3pSJpuxqudRTaSHZ2PnmlLUbmdbpgJXweeT3Zqw9O6XtvRI31O43TugJWMMoX6ZpT6p0G202/UnUf1Uw3JuhJI8xx8Ky4ckXOjTki1FMX4hPdSrDFuaRjwOTTVc9NxehxyvHMsjIM78rz7KM/0fWWnRRmaO5EkxLZJhIPGOOfnTXqN5bDTpPSAWVTjJ/nuodR1DjKoo7FiUlbKZtLFF1qO3mOY8lsHxx4fSrSsdDaW1Hby9khHESIDj31XN42hTyvdm/uhKWJiEaeqOTjmm/Rev8ATbi023t16NOowyuh59xxSdU8slGUUymDQrTFLrXRJ9HvWMczSW78qe7FLSBmOMk58POmfrbqG31aRIbIl4ox+0K43eJ4PuFLNpN6PcRS7ciN1bb54OcV6GJz7a1cmXIlr/PAXt9AvILiKWbs1xzsLcj38U+6TFa28Y9JjV5v3t3hUGze11WWKSKVHikbJ55HsPkfZRK8lIQxmFXQDA4rz8spZGkzVjSgthJ/pAgs2mW4tlCFsg7RgGkwCivUVzI+pTwk+pE+FGe6hW+vSxRcYJMyZHcmzpgAY8ffXJu+sdpRTT7mGGDlFZmPO4A05naozdIyEE5Dd+7PINHl60nNoY7qJ3cD8SPgH4HuoReWVwvrSKaFSdx9lTlihk5NcJSjwH9H1V9Xvrywucqt9AUTH7rKCR/GjI09dG6Wa1YgyuwaUjxckZ+WMfCo/RGlraWRv5VHbXI9Un92Pw+ff8q21bUU1GGA2jB7btHBYeLrx9jn25qD3lpjwIltuDF7ufnVy9AadY2PT9rcwxo1zcJvkmwCefAHwAqn1jBBU8jxFMGjdU6xo0Agt5hLbgALHMCQvuxg12aLmqTGhUZWyyerdTsrC0iuLksrs+0bIyxbjPcKXOm7G36p1CXUdQtHMFsRDbwTKcEnkuw8fDjupM1jWtU1a5E13eSjAwqRuyKo9gzW2g6/faJO7wuZUkwJI5XJDY7j7DUodPpV+ykpuW3ou/8ARen2kMgs7G2gJGSY4VXJ9uBVZ/0j6fetPJFbXj9jPCCLUYVQ2eeeOD5Gtbr+kvUJIykenwLx+J5CT9AKTda1nUdXkZ7+cNn+qMD/AGqcOmyd7W+BnJaaRpD0vqpt13pBHhjw060G1XTptNu+xmeIuRu/VvuFdiqYOME+VDpWJl2bCGzjGOa9GN+2Ra2JiRA2olMq5P7tet7Wa5JEEbSYHO0ZxUyHprWWh3jTLgJjO5xgY86vrpxLDQdJt7KyRECoN7DGZGxyxPiTU5Za2i7BoPnibTr+0QXot540QgicRkBSPHPdRmTrzUmtTE1vbGbGO3wc+/b3Zq8r7VYim04KtkFT3GvnfquO0h6k1CKwULbrL6qjGFyBkD2ZzTRSn/SClKPDBkshkZnkYs7HLEnkmuWeKwx5rQnFaUjtJktWBKfM1rmtSwrqA4Fn9c3NvJpzFH2yK427W7894+VV3Md0iRE/tGAPuJxUm8up7h8zyFsdw8BQy6J3DBwfPyqOLD240Wyu9ywesL/9H6OIIvVMx7LI8EA5x8MD41p05p0Gn6Wnp8il7kiQRv3A7e4DxOO//SgWtXv6d0CK5X9tav8Ar1HeARjPuzXPVNQnvLfTdRszl7RQkijns3GDkjyPn8KloemiL5sbeysryA3GmyxyBe/s23D/AEqJHGdzdv2hGfU7MqOPbkUD0qU2PVUBtMi0vgGVfDYwzj+6QR8KZ5tkNwISG3sxCqqkk4zStaXRSKtA66mitwW9CmkUDkm6APyEf8a9aoLq2WeSO1t435TdPJI/l+HjyqRfRbkZT2aHxEk8an5Fs1D09y6zRbU3RvjO/I5AOQVByM5ptnEOlHmmsVk7GKMyyk8PImF9wGa6CWSPmOK3X3QL/GoGoAwyJMm1mVwWVUfgeJyVHhmigiZgCTIQf6sQH1LUWkkFRMDVdQi/ZzKnuiT8qE3YkuLtrqVy0zHJfgUXNvD++ty395RXWF9Og5bSWnP/AMl0wHyAoWlukHSDZ9f1cx7JNTuNmMbd2Bis6f1rqtpGLYSLOo4UuCWHxHfRa51i0axntoendPhaRSolB3Mv+GlKCza3lWQEFl+VNjSp/mjqCl71ZrEysjzqhPiqAEUrvITJnk+ZNFLpGldnccnyqG8SirwqjqIbcnNYIruyiuTCqHUcyBWpAFbFa1wK4Vhqa1Y91C7uB1blSaZiQKg3lxFH+JRmpqTKONoB2V3NYz9rCwDYwVYZDDxBHiKJwPpM7mRbm40yUjBCAunwxzj2VGuJbeRThMHzAoz01oNteWnpF0Gk3khFDEADOM8ePBpclJWyOh3SCvTB0mKWFLSc309srNHI6FBHuIzgEc/60wPapMP1qK/OfWGaToNNfRep7RImLQzg7M+K85B9vFWH6Kzwsgdo3wQHA5FY8rSdplIrYBX5trSBnkCoqjnioGmoe1SaMbY5FIG7gkHlT9/nR+TQPSoOyupYXyMFjGx+PrMRn4VtYdPxwW8aekyzKqgK52nI+xodyKiNQmPc9tq89tduuxF/Vx5yG8yaYbcxx2yK28lRjiNsfPFHxpMXiZm/tSsR8s1r+iLRTn0aPPmVBrpZovYG4vvKmcKnzdR/GvLbiTvlhjHmWLfYUekgggXkIgx5Yrkscc0aywkPGwyrDxFDuHA5NM0w49J1R/aIrZv40RituhrdczjVbtvI+oP4VyktfZRXQumF1KJ7ifd2SttAXxoN3y2EVOo59CnhMej6TJbt4PIQT9yaTpbUqeWq7JeiLHacwsQfNjVc9c6GdBuxGGbs5E3xlu/GcY+laMDUVpR2z4E+SLb41wdcVNZlKDPfUWQCtiOIzVoa6sBWhxREY92mlXV4p9GgZx3bvDPvoXq/T+pRq8s1owEYJ4OauvpGC1/RlquArRqUkUjBV885rrri2UJ3PtOAdwGOQfCvKydVKG6RritT0nzVIhViGBBHgaLdOaw2lTEOjS27/iQHkHzH5UbNslhdIuowJJAz7SWAJXPdz/PxokrdMQudtgjMOMGHb/3YrVPKmuCLjpkT9HjsdZ1CPUsXM3YrsiRo+zjiHiAfEnJ55+FNiR7txI5PlQC21pdipaWE2APVCo2B/wDlSPrRGG51aX9lYlFPiwUfd8/SsGS2woi9QK1vbm4QZMXrY88Vw6T1W3azt7OU7CSViVsjgE4HywaLroOt6yGjYQpHj1t03q/IIPvS5qHRuoWEno95NhXkWWG4hJIU9wUE+W0d45zRWlxpsL+DlL2MXM0saf22AqHLf2CZxcK+PCIFz9M0X6L6Z0+8sYNSuUdnlRX2ZCgEjP7oGe/xzTVcdPaQ0BRtNtGXxDQqfvUZVFWScldFQ6zqljLGVjyW7/Wwv3Oah9M6hI+lrbxWrnsXZRlG9UZ4BAHljxp91fTrW0M0UUccaL5KBxQbp/T5LOO+vpoDHZTiN47h2AVzypx8ApzVY5YvHshtiIiTyetLFMB5KgH3NM/TOt2mlxNb3VvKsTMXMhbcQfcPdQyW+syTtk3e0KcfM1FkdJUyZIolbuZ3/Klth0pqmP131PYWtjFepFJJbykiN1UckeHPdVRdc31x1VfdrJDhY12xRRjcQPafE04dKRW2p6JqOk3s79nY3XbJJEO9GHhnPjuonDa6LpcCvYW00jM4MjO2WYDw93sp+7ol9DDGrpIoKS2WNCrqVZTyCMEVBlQDuqyf6S7NLy5W+tbYxZbGAO8Y7z8fvVczIVJGe6vSw5NcbGlj0siFMmuttp73CFl7qysZPIqZY30tijIIw4Y558Ko5A7f0snqZLhNZk9FvOyJjAk7Mfvf7YpduBfM0MBuppI3yCSed1FtXuYbeUsc5K5Yd33oVbSNdt24XYinKbGzu9/hXn4/5VmjdSZFS2eWVX7d1F0N21uVDHwI8Rn/AHpx0IRy2MU3YJFIR64VQPWBwfrQ3QNIn1K/iSGJmhiJkJI4znuzn2/SnNtA1BLbsoOwhUAncMZz357j96lmyq9Ijx6ldkNwwX1TQC4umgv0MsxJjnikjV3/AOba3+Fj8qlPoN9ISLrVXx5RJ/5Ej6VCutDhV4oXmlcFsDJAw37p9UDuODQWn7ZJclndP6xZvDJbpIO0DZHeA3uJ4NFNRtYPQS91CsuCDs2559lV+/Tei61bR3V1ZofSUWZvBgWG4jPf3k02aIqabYx2tupEEQ2opYnaPLms05RSFr4RX1C+0gQjTNKZ7U4RohhduBxjcVxx76KWOpapfqWks4LZAfGfex+AGPrUHXL0LEHkkjiQZxuYDmljR+pUtNeRbi57RJI5uDznaA+QfIBWz7xRjc40jpJXdBnq/pOXXNNniM+JZAfWUkfxP2rhrOpTy9PQ2GoWSrIFRXitZGwzDgAHjAqfL1fb3UX/AKCB5t3GUO8fNc0v3Wo6jcX6bdOkjiXvkcAYPxOf8NBKS2KuDdahm0zpnQorSKd9LjnlK7j2wDYPxodrd40zXNrLHBElsEkhWNduFPB/hU7Sr27ksiJgm6NiCVPBB5B+9KstjqF71S0waR0miaFhEvCKRw3j4gU+JylsznjUWxg6E0tpTeairp6LcJ2IHixB7/qa96Hc2/aNJNCmAcIXzk0vaLqWq9P6RJpkc4ki3MUZly8eTyAaCW8gguGxFu3d/mKpOGr+Q4tSk74GPUrE3MTyy5Pq957sVTurYW9lWMeoDxVm3989xaNbxNPhhg5OAKTLzQjnO0j31o6b8J6jVOLmqQuxSY9UrkVo5LHhaYtP0cI5ZkBI7qedJ0mBbKPaqjIySB3mtPciTljaW531LpG3uW3LEu7+sTmsQdPxWFuVllQAdwVeaapLhzHiKFskeVK+pWOpzOT2qRJ7SOK8LFn1vd0aHq0hLp2SO0Zo4gsfOVz40dv9WSO3Ks8SOR3GTn5UgwaUzvmXUGl5wQg4Hzz9qM2WkWwdQ+9iTx2jcfKtDjju7M/afs4XerWluCXl3H3Y++KhdNXUev8AVEcFyYltIiGEe7mQ+0+zyFN1lpVjLbRypbQozqCxCAHPjUqz0aytJTNFaxLI3fJtG4/Gh3oK0TcIq0dr3T37cRaXCkduqgAhgozyTjg/aoqaHqGCs+ocH+qpJx8wPpRtbqOJQshA95rWTUYV/n86WWbGo7EoxmuELlz0nbSLmWa5fPk/Z/8AZg/Wg9z0/Bp12t3DCm6JlcswLMVBBcZPPKbh8acpL7cP1cRYfGoNveR3FzKssaMVGFRlyDnvyPGoeS1smXWNu20dXtSgKoeB4Ch976PFG3bSqABkjPPyqZcWclw7NJclVPcirnHzyPpUO50a2eIoXkYN37nPHw7vpSrKGOOG2pkfTvR4IDcCRy06r+rIwFwSQc57+frXbS729tGuRBGP1z5Mm3JAAwBzW1taRWUKxxlmwO9jyKxJdBOM/CqeRL0V7cXtyRp7YsSzQq5Jyd7Y+gqFL20SlUWKNf8Akjqe92T+IhfaxxUW4nhwcy7m8lGR86mssi8YL4DVSJGOVOT41loY5ByorEiiQnBx8a1VCP36aWWT9mmMUuDC2ESkkYqXCs0S7Y3CjyxmokgdeVYmtRcSKKm55PTC4plgNp18w/4cj+8KG3/T+pXKFfRyVPhvH50916ty6PGj59ddkXwQ7Ppy9tu0VLMKnqlRuXvxg+Ps+tem0bV94eGyGQc+tIv50+V6j4sA+dlu9hJs7HXYognoSoSzH9ovGTn+eKmJpOqSczOq+xTn8qZplZ4nWNirFSAQe40OFhfLuZb07nPrA5I/AFGMnjBy3tNDw4fRX1k/iIMehsv497H+0F+1So9LEf4bdAfPjNZj029jG1b5wMEZ3k87AoPOfEE49vsrpNYXjO7R3TKCW2gyNwDjH2PzoeFj+iPqZs0e0mIxs+oqP+jJEJMUChj3kEVOSzvFuY5TdblXcGQ5w4JGD7MYxgcVqLG99UNetgKAxBOWOeT7M+zu8KPh4wLqZoFzWd+DhLVnz4h1A+9Qp7DWTxHY8+YdSPqR9qaIra4SCONruTcsgZnwCXHipz5+yuE+nzSXIniuCn61WK+BUDux8T9PKj4eMddXNekKzaJrsn4o40H9vcf4CtD03qhHrI7ewOqj6Uztpl00IQThWEMkY9c97Hg+fFbTabdS3Pai5MY7RW2qSQMd/wA/58q7xMY/n5V6QoN0xqQ/BZjPnvX865P0xrDDHoo/6i/nTvY6dPb3Eckl48qqki7W8dz7ge/vHd9qJ13iQHX/AEcy+FWv0lrZ/Da/5i/nWg6T6gB/4TP/ANi/nVq16j4sA/6mb4isU6Y1sfisf81fzrJ6X1k/+y/zF/OrNr1L4eM7/TzfEf/Z",
        name: "Jo bhi hua",
        artist: ["ARIJIT SINGH", " ARMAN MALIK"]
      },
      {
        id: "asdassdadsassd",
        image:
          "data:image/jpeg;base64,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",
        name: "Jo bhi hua",
        artist: ["ARIJIT SINGH", " ARMAN MALIK"]
      },
      {
        id: "asdassdadsassd",
        image:
          "data:image/jpeg;base64,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",
        name: "Jo bhi hua",
        artist: ["ARIJIT SINGH", " ARMAN MALIK"]
      },
      {
        id: "asdassdadsassd",
        image:
          "data:image/jpeg;base64,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",
        name: "Jo bhi hua",
        artist: ["ARIJIT SINGH", " ARMAN MALIK"]
      }
    ];
    setSongArr(songarr);

    console.log("Hurrrrraaaay");
  };

  const renderSong = songArr.map(song => {
    // console.log(song);
    return (
      <Link to="/song/:id">
        <SongList song={song} />
      </Link>
    );
  });

  return (
    <>
      <Search onsearch={handleSearch} />
      <div className="songlist">{renderSong}</div>
    </>
  );
};
export default Home;
