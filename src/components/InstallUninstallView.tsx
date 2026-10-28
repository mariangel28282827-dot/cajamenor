import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { 
  Download, 
  Trash2, 
  Monitor, 
  Smartphone, 
  Apple, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw, 
  WifiOff, 
  Layers, 
  ExternalLink,
  Info
} from 'lucide-react';

export const InstallUninstallView: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [activePlatform, setActivePlatform] = useState<'windows' | 'android' | 'ios'>('windows');
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleResetData = () => {
    if (window.confirm('¿Desea restablecer los datos locales de la aplicación a sus valores predeterminados oficiales?')) {
      localStorage.clear();
      sessionStorage.clear();
      setResetSuccess(true);
      setTimeout(() => {
        setResetSuccess(false);
        window.location.reload();
      }, 1500);
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Banner with Direct Action */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-sky-700 font-bold uppercase tracking-wider">
              <Download className="w-4 h-4" />
              <span>Progressive Web App (PWA) · Multiplataforma</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Instalación y Desinstalación de la Aplicación
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
              Instale el software de <strong>Caja Menor de Viaja con Adri</strong> en su computador o teléfono móvil para acceder con un clic, ejecutarlo en ventana nativa independiente y utilizarlo incluso sin conexión a internet.
            </p>
          </div>

          {/* Interactive Install Status / Trigger Button */}
          <div className="shrink-0 flex flex-col items-start md:items-end gap-2">
            {isInstalled ? (
              <div className="flex items-center gap-2 px-4 py-2.5 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Aplicación Ya Instalada (Modo Nativo)</span>
              </div>
            ) : isInstallable ? (
              <button
                onClick={install}
                className="flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Instalar en este Dispositivo</span>
              </button>
            ) : isIOS ? (
              <div className="px-3.5 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-700 flex items-center gap-2">
                <Apple className="w-4 h-4 text-slate-800" />
                <span>En iOS: Use "Compartir" &gt; "Agregar a inicio"</span>
              </div>
            ) : (
              <div className="px-3.5 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-center gap-2">
                <Info className="w-4 h-4 text-sky-600" />
                <span>Disponible para instalar vía Chrome, Edge o Safari</span>
              </div>
            )}
            <span className="text-[11px] text-slate-400">Sin descargas pesadas · Cero consumo de disco</span>
          </div>
        </div>

        {/* 3 Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 pt-5 border-t border-slate-100 text-xs">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
            <Monitor className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block text-xs">Ventana Nativa Independiente</strong>
              <p className="text-slate-500 text-[11px] mt-0.5">Sin barras de navegación ni pestañas distractivas; abre como cualquier programa de Windows o Mac.</p>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
            <WifiOff className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block text-xs">Disponibilidad Offline</strong>
              <p className="text-slate-500 text-[11px] mt-0.5">Acceda a los formatos, al simulador de arqueo y al manual maestro sin depender de conexión a internet.</p>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
            <Layers className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block text-xs">Acceso Directo Inmediato</strong>
              <p className="text-slate-500 text-[11px] mt-0.5">Ícono propio en el Escritorio, barra de tareas de Windows, Dock de Mac o pantalla de inicio de su móvil.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Tabs Selector */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActivePlatform('windows')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
            activePlatform === 'windows'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Monitor className="w-4 h-4" />
          <span>Windows y Mac (Chrome / Edge)</span>
        </button>

        <button
          onClick={() => setActivePlatform('android')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
            activePlatform === 'android'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Smartphone className="w-4 h-4" />
          <span>Android (Google Chrome)</span>
        </button>

        <button
          onClick={() => setActivePlatform('ios')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
            activePlatform === 'ios'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Apple className="w-4 h-4" />
          <span>iPhone / iPad (Safari)</span>
        </button>
      </div>

      {/* Platform Instructions Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* ========================================= */}
        {/* HOW TO INSTALL */}
        {/* ========================================= */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">¿Cómo Instalar la Aplicación?</h3>
              <span className="text-[11px] text-slate-500">Paso a paso para su sistema</span>
            </div>
          </div>

          {activePlatform === 'windows' && (
            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs">Opción 1: Botón directo en la aplicación</strong>
                <p>Haga clic en el botón superior <strong>"Instalar en este Dispositivo"</strong>. Aparecerá un cuadro emergente de confirmación en el navegador; pulse <strong>"Instalar"</strong>.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs">Opción 2: Barra de direcciones de Chrome o Edge</strong>
                <p>Mire la esquina superior derecha de la barra de direcciones de su navegador (al lado de la estrella de favoritos). Verá un ícono de pantalla con una flecha hacia abajo. Haga clic en él y seleccione <strong>"Instalar Caja Menor · Viaja con Adri"</strong>.</p>
              </div>

              <div className="p-3 rounded-lg bg-sky-50 border border-sky-200 text-sky-900 text-[11px]">
                <strong>Resultado:</strong> La aplicación se abrirá de inmediato en su propia ventana sin menús del navegador y se creará un acceso directo en su <em>Escritorio</em> y en el <em>Menú Inicio</em> de Windows.
              </div>
            </div>
          )}

          {activePlatform === 'android' && (
            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs">Paso 1: Abrir en Google Chrome</strong>
                <p>Abra el enlace de la aplicación en el navegador Google Chrome de su dispositivo Android.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs">Paso 2: Pulsar el aviso o menú</strong>
                <p>Chrome mostrará en la parte inferior de la pantalla el mensaje <strong>"Agregar Caja Menor a la pantalla principal"</strong> o <strong>"Instalar aplicación"</strong>. Si no lo ve, toque el menú de los <strong>3 puntos verticales (⋮)</strong> en la esquina superior derecha y seleccione <strong>"Instalar aplicación"</strong>.</p>
              </div>

              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-[11px]">
                <strong>Resultado:</strong> El ícono oficial de <em>Viaja con Adri</em> aparecerá en la pantalla principal de su celular junto a sus demás apps nativas.
              </div>
            </div>
          )}

          {activePlatform === 'ios' && (
            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs">Paso 1: Abrir en Safari</strong>
                <p>En su iPhone o iPad, abra la aplicación exclusivamente desde el navegador <strong>Safari</strong> (Apple no permite instalación PWA desde Chrome en iOS).</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs">Paso 2: Tocar el botón "Compartir"</strong>
                <p>En la barra inferior de Safari, toque el ícono de <strong>Compartir</strong> (un cuadrado con una flecha hacia arriba).</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs">Paso 3: Seleccionar "Agregar a pantalla de inicio"</strong>
                <p>Desplácese por la lista de opciones y pulse <strong>"Agregar a pantalla de inicio"</strong> (ícono con un signo +). Luego confirme tocando <strong>"Agregar"</strong> en la esquina superior derecha.</p>
              </div>
            </div>
          )}
        </div>

        {/* ========================================= */}
        {/* HOW TO UNINSTALL */}
        {/* ========================================= */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center">
              <Trash2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">¿Cómo Desinstalar la Aplicación?</h3>
              <span className="text-[11px] text-slate-500">Eliminación limpia y sin residuos</span>
            </div>
          </div>

          {activePlatform === 'windows' && (
            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs">Método 1: Desde la propia ventana de la app</strong>
                <p>Abra la aplicación instalada. En la barra superior derecha, haga clic en el <strong>menú de 3 puntos (⋮)</strong> y seleccione <strong>"Desinstalar Caja Menor · Viaja con Adri..."</strong>. Si desea borrar los datos temporales, marque la casilla y pulse <strong>"Quitar"</strong>.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs">Método 2: Desde la configuración de Windows</strong>
                <p>Abra <strong>Configuración de Windows &gt; Aplicaciones &gt; Aplicaciones instaladas</strong>. En la barra de búsqueda escriba <em>"Caja Menor"</em>, haga clic en los 3 puntos y seleccione <strong>"Desinstalar"</strong>.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs">Método 3: Desde la lista de apps del navegador</strong>
                <p>En Google Chrome ingrese a la dirección <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">chrome://apps</code> (o en Edge a <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">edge://apps</code>). Haga clic derecho sobre el ícono de la app y elija <strong>"Desinstalar"</strong>.</p>
              </div>
            </div>
          )}

          {activePlatform === 'android' && (
            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs">Paso 1: Localizar el ícono</strong>
                <p>Busque el ícono de <strong>Caja Menor · Viaja con Adri</strong> en la pantalla de inicio o cajón de aplicaciones de su teléfono Android.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs">Paso 2: Mantener presionado</strong>
                <p>Mantenga presionado el dedo sobre el ícono durante 1 segundo hasta que aparezca el menú contextual flotante.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs">Paso 3: Tocar "Desinstalar"</strong>
                <p>Toque la opción <strong>"Desinstalar"</strong> (o arrastre el ícono hacia la papelera superior). Confirme en el aviso emergente pulsando <strong>"Aceptar"</strong>.</p>
              </div>
            </div>
          )}

          {activePlatform === 'ios' && (
            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs">Paso 1: Mantener presionado el ícono</strong>
                <p>En la pantalla de inicio de su iPhone o iPad, mantenga pulsado el ícono de <strong>CajaMenorAdri</strong> hasta que todos los íconos empiecen a temblar o aparezca el menú rápido.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs">Paso 2: Seleccionar "Eliminar app"</strong>
                <p>Toque el botón con el signo menos <strong>(-)</strong> en la esquina del ícono o elija <strong>"Eliminar app"</strong> en el menú.</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs">Paso 3: Confirmar eliminación</strong>
                <p>Seleccione <strong>"Eliminar de la pantalla de inicio"</strong>. La aplicación y su acceso directo quedarán borrados de inmediato.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Maintenance & Reset Utility Box */}
      <div className="bg-slate-900 text-slate-200 p-6 rounded-xl border border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-sky-400" />
              Mantenimiento Técnico: Limpieza de Caché y Restablecimiento
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Si experimenta lentitud, desea reiniciar el simulador de arqueo al ejemplo oficial del PDF o borrar modificaciones temporales guardadas en el navegador:
            </p>
          </div>

          <button
            onClick={handleResetData}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer shrink-0"
          >
            {resetSuccess ? '¡Restablecido!' : 'Restablecer Valores Predeterminados'}
          </button>
        </div>

        {resetSuccess && (
          <div className="p-3 bg-emerald-900/50 border border-emerald-700 text-emerald-200 text-xs rounded-lg flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Datos restablecidos con éxito. Recargando la aplicación...</span>
          </div>
        )}
      </div>
    </div>
  );
};
