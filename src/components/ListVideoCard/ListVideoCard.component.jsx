import React from 'react';
import parse from 'html-react-parser';

import VideoCard from '../VideoCard';
import RelatedCard from '../RelatedCard';

const ListVideoCard = ({ videos, onSelectedVideo, relatedCard }) => {
  return (
    <>
      {relatedCard ? (
        <div className="col-start-6 col-end-8">
          {videos.map((video) => (
            <RelatedCard
              key={video.etag}
              title={parse(video.snippet.title)}
              description={parse(video.snippet.description)}
              thumbnail={video.snippet.thumbnails.default.url}
              video={video}
              onSelectedVideo={onSelectedVideo}
            />
          ))}
        </div>
      ) : (
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {videos.map((video) => (
              <VideoCard
                key={video.etag}
                title={parse(video.snippet.title)}
                description={parse(video.snippet.description)}
                thumbnail={video.snippet.thumbnails.medium.url}
                video={video}
                onSelectedVideo={onSelectedVideo}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ListVideoCard;