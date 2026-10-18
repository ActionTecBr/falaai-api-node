@echo off
rem clean.bat - apaga os artefatos GERADOS do SDK node (exemplos + logs)
del /f /q "D:\ProjetoFalaAI\FalaAI\FalaAI_api\sdks\node\examples\*.ts" 2>nul
del /f /q "D:\ProjetoFalaAI\FalaAI\FalaAI_api\sdks\node\examples\README.md" 2>nul
del /f /q "D:\ProjetoFalaAI\FalaAI\FalaAI_api\sdks\node\tests\e2e\logs\node_*.json" 2>nul
del /f /q "D:\ProjetoFalaAI\FalaAI\FalaAI_api\sdks\node\tests\e2e\logs\node_*.html" 2>nul
echo done
pause