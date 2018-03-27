// FIXME: add some meaningful data

const pictures = [
  {
    shape: 'square',
    width: '200px',
    height: '200px',
    url: 'https://i.tween.pics/v1/https://s3-eu-west-1.amazonaws.com/assets.atout-on-line.com/images/ingenieur/2014/fiches_ecoles/epita_300.jpg',
    title: 'epita'
  },
  {
    shape: 'square',
    width: '200px',
    height: '100px',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lyc%C3%A9e_Marlioz_-_Aix-les-Bains.JPG/1200px-Lyc%C3%A9e_Marlioz_-_Aix-les-Bains.JPG',
    title: 'lycee'
  },
  {
    shape: 'square',
    width: '220px',
    height: '120px',
    url: 'http://cache.magicmaman.com/data/photo/w1000_ci/4z/students-raising-their-hands-during-class-picture-id469968322.jpg',
    title: 'primaire'
  },
  {
    shape: 'square',
    width: '300px',
    height: '200px',
    url: 'http://cdn1-europe1.new2.ladmedia.fr/var/europe1/storage/images/europe1/societe/la-disparition-des-classes-europeennes-une-fausse-bonne-idee-936576/18781792-1-fre-FR/La-disparition-des-classes-europeennes-une-fausse-bonne-idee.jpg',
    title: 'college'
  },
  {
    shape: 'square',
    width: '200px',
    height: '300px',
    url: 'http://idata.over-blog.com/4/30/79/35/VIE-QUOTIDIENNE/classe-maternelle-1-bis.jpg',
    title: 'maternel'
  }
];

const picturesStringify = JSON.parse(JSON.stringify(pictures))
module.exports = {
  pictures,
};