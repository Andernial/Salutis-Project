import Card from 'react-bootstrap/Card';


export function DeveloperCard({img,name,title,linkgit,linkedin,email}){
    return(
        <Card style={{ width: '18rem' , background: '#D93636'}} className='shadow'>
        <Card.Img variant="top" src={img} />
        <Card.Body className='text-white'>
          <Card.Title>{name}</Card.Title>
          <Card.Text className='lead'>
            {title}
          </Card.Text>

          <Card.Text className='lead'>
            email:  <Card.Link className='text-white' href={`mailto:${email}`}>{email}</Card.Link>
          </Card.Text>
          
          
          <Card.Link href={linkgit}>GitHub</Card.Link>
          <Card.Link href={linkedin}>Linkedin</Card.Link>
        </Card.Body>
      </Card>
    )
}