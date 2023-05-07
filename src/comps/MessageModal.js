export default function MessageModal({ success, msg }) {
  const background = success ? 'bg-green-300' : 'bg-red-300';
  return (
    <div className={`${background}`}>
      <p className='text-white'>{msg}</p>
    </div>
  );
}
