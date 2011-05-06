function StageAssistant()
{
	
}


StageAssistant.prototype.setup = function()
{

    this.controller.pushScene('main');
    
    
}

StageAssistant.prototype.handleCommand = function(event)
{
    this.controller = Mojo.Controller.stageController.activeScene();
    if (event.type == Mojo.Event.command) {
    
        switch (event.command) {
            case Mojo.Menu.helpCmd:
                this.controller.stageController.pushAppSupportInfoScene();
                break;
        }
    }
};
