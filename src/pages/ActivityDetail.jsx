import { useParams } from 'react-router-dom';

function ActivityDetail() {
  const { slug } = useParams();

  return (
    <div>
      <h1>Activity Detail: {slug}</h1>
      {/* Detailed activity information will go here */}
    </div>
  );
}

export default ActivityDetail; 