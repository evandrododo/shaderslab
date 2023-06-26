import './ProjectInfo.scss'
import { Github } from '../../icons/Github';
export const ProjectInfo: React.FC<{
  gitHubUrl?: string;
  title?: string;
}> = ({
  gitHubUrl,
  title,
}) => {
  return (
    <div className="right-bottom">
      <a href={gitHubUrl} className="github">
        <h2 className="title">{title}</h2>
        <Github width={"2em"} />
      </a>
    </div>
  );
}