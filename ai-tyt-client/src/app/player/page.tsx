import AudioPlayer from '@/components/audioPlayer';

function PlayerPage() {
    return (
        <div className='container min-h-full flex flex-col items-stretch content-center text-yellow-light'>
           <AudioPlayer style='grow' />
           <div className='box-content h-28 bg-orange'>items</div>
        </div>
    );
}

export default PlayerPage;