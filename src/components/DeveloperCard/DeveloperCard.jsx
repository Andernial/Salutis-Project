import Card from 'react-bootstrap/Card';
import "./card.css"

export function DeveloperCard({img,name,title,linkgit,linkedin,email}){
    return(
        <Card style={{ width: '18rem' , background: '#D93636'}} className='shadow'>
        <Card.Img variant="top" src={img} className='image-dev' />
        <Card.Body className='text-white'>
          <Card.Title>{name}</Card.Title>
          <Card.Text className='lead'>
            {title}
          </Card.Text>

          <Card.Text className='lead'>
            email: <br></br><Card.Link className='text-white custom-font' href={`mailto:${email}`}>{email}</Card.Link>
          </Card.Text>
          
          
          <Card.Link href={linkgit}>GitHub</Card.Link>
          <Card.Link href={linkedin}>Linkedin</Card.Link>
        </Card.Body>
      </Card>
    )
}