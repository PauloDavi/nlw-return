import { Content } from './components/Content';
import { Header } from './components/Header';
import { WidgetButton } from './components/Widget/WidgetButton';

export function App() {
  return (
    <>
      <Header />

      <main className="min-w-screen min-h-screen py-12 bg-background dark:bg-dark-background">
        <Content />
      </main>

      <WidgetButton />
    </>
  );
}
