- 1. Concurrency Execution
    - 1.1 Foundation
        - General
            - Semester 1 vs Semester 2→Sequential or Event Driven Programming vs Parallel Programs
            - True concurrency vs Interleaving Concurrency/Pseudo-Parallelism→Less flows then CPU cores vs More flows then CPU cores ⇒ By time slicing, the cores switch between flows in rapid succession.![](https://lh7-us.googleusercontent.com/vh83nZcUejN3PHzxPocdd5Cn4r4_rRHVKeBKt7JIuBjGnnmNnQ0rqFomRJHjGx8vlOm8KWgeVPi61Fh_iFrO2XHjHm-EKxvxFlMYhjskv_tw1pAUrEh8vMCT1TqzDJpx_vRv2k-iP8Q2Alxt4YRG8q0)
            - Strategies for assigning a CPU core>>>
                - Non-Preemptive→Process releases core voluntarily (first come first served, shortest process next)
                - Preemptive→Scheduler can interrupt a process
                - Real-Time→Very tight timing requirements? (Deadline scheduling)
            - Program→Sequence of instructions, written to perform a specific task
            - Process→Process is an independent entity in the system. An executed process locks memory for its execution. As soon as no thread is present in a process, the process gets closed. Process Switching is expensive, due to saving its state. 
            - Thread→A thread is a lightweight sub-process sharing the same memory space as its parent process or other threads in the same process. Thread Switching is cheaper, it only needs to save its registers.
            - Process vs Thread→![](https://remnote-user-data.s3.amazonaws.com/C-4fklAyUTBlPCNJPH57RMeFhqO0I_zcistVjNzjl_lfO77CFzgD9rcrvyOPmHnJRvuJSpik2kWVwqZJyg8nqICCmVpMn82IDycLVxzZQnFnkZK2rncMKV-XWiG1Zax6.png)
            - Multi-Tasking→Multiple Processes with each having one thread
            - Multi-Threading→One Process with multiple processes 
            - Single-Threaded vs Multi-Threaded→![](https://remnote-user-data.s3.amazonaws.com/RudHpdd4OKizVM1rERlfmiLLd1pZBDARxSWUqImmQa4RKUkPSyqemxV6Dhkk68beSDlo-YsDQc247ewd11l3eOhH10jWo8AYV6YQe6GyNt7lq5jIRcB6BjiJL20G--6S.png)
                - Shared Process Resources>>>
                    - Code→Executable program code loaded to memory (e.g. by ClassLoader)
                    - Data→dynamic memory: class instance data, data fields (Heap) (Garbage collected)
                    - Files
                - Thread State Resources>>>
                    - Program Counter→Current position in program sequence
                    - Registers→Content of CPU register to restore on thread switch
                    - stack→local variables, method pointers, method arguments, return values
        - Concurrency in Java
            - The JVM→has only a single OS process per JVM instance, but allows multiple threads. 
            - Thread Library→java.lang.Thread
            - Daemon Thread vs User Thread→A daemon thread is a "Background" Thread. The JVM is runnning until all user threads terminate
            - On starting a Java program→JVM starts a daemon thread to call the static main method. (Some subsystems like JavaFX start their own threads)
            - Two ways to implement a thread>>1.
                1. Extend the thread class and override the run() method>>1.
                    1. Create an instance of the Thread class (or a subclass):   
Thread myThread = new MyThread();
                    2. Start thread: 
myThread.start();
                    3. Start executes the run() method of the Thread class, which must be overwritten.
                    4. Don't execute run() by itself, because no Thread will be created.
                    5. ![](https://remnote-user-data.s3.amazonaws.com/81vyQMyYlri9o4oZqPqMnjYRcPzXIBp60KAYRWoDNAfIWRiBKtNT-h8KTJXBjfMLOHZ-276KsQogaSWaVLFlDVAWcw1lvrKOFo0nf6twfF96NR5hZh76grwehrWKywjg.png)
                2. Implement the runnable interface in a separate or anonymous class and assign to a Thread>>1.
                    1. Create an instance of a Thread class and pass your runnable class:   
new Thread(new MyRunnable).start();
                    2. Start executes the run() method of the Thread class, which must be overwritten.
                    3. Don't execute run() by itself, because no Thread will be created.
                    4. ![](https://remnote-user-data.s3.amazonaws.com/3pNHHhZhLOtYUTkcd7SZyIpOXO--3fZZ1CbwYNwuEElCI7sMqzPBP9iF1E2DDRp0zc7FNtxD9BtCkQ87tN8Wn11-WHhNDBuTZy_Gk2l3OLyAHYKshqgUj4WZqd6OF2n6.png)Why currentThread()?→Runnable doesnt have this method.
            - Thread.setName(String name)→sets the name of the thread.
            - Thread.getName(String name)→gets the name of the thread.
            - Thread.sleep(int ms)→Thread sleep for given milliseconds. (Throws an InterruptedException if Thread is interrupted while waiting.)
            - Thread.yield()→Suggests the scheduler that the thread could be used.
            - Thread(Runnable target)→Allocates a new Thread object
            - Thread(Runnable target, String name)→Allocates a new Thread object with a name
            - static Thread currentThread()→Returns an instance of the currently executed Thread object
            - How to pass parameters to the run() method→Set instance variables in the constructor
            - Scheduler→Assigns threads preemptively to the CPU.
            - Deprecated Thread methods→stop(), resume(), suspend() ⇒ Can lead to inconsistencies.
            - Bad ways to stop a thread→System.exit(), Exception, Thread.stop()
            - Good ways to stop a thread→Let the run method terminate, use flag-variables for loops.![](https://remnote-user-data.s3.amazonaws.com/xAjRnR0tJGs1nmZ8-IgwtTxgKJfuzeinKsDAmkow8-0qVIqlUvqQOkul2xnR5qKfVAJ8ETpQQxBqeubXH6t_5NJngJTL5JIGPzAaUHn7Mv9pjuKwtNOlQku1CAN2MBfM.png)(this.interrupt causes the catch-block to be executed + note in pic)
            - States of Threads>>>
                - NEW→created, but not started by calling start().
                - RUNNABLE→Has self-explanatory substates READY and RUNNING.
                - SUSPENDED→has substates BLOCKED (waiting for monitor), WAITING (waiting for interrupt or notification), TIMED_WAITING
                - TERMINATED→Thread has stopped but instance is still available (can't be reused)
                - ![](https://remnote-user-data.s3.amazonaws.com/1ujDUI8dERnuXqin9TREL2swlq3bD81gVeLlSSw62d8N8YXdjCirni19S1pktVtB8v4X08NO8AMUa0_zcvV47XO49NEnMUw-LTXZkGtYZmu8XoxoNrtS53nv-oO_Y-eP.png)
            - Parent-Child Relationship→Does not exist in the context of Threads. All are independent.
            - Thread.join()→When executing otherThread.join() the current thread waits until otherThread is terminated![](https://remnote-user-data.s3.amazonaws.com/2vR-05QDWCe2N7YXnyrPrP-nUCvsTeBGlEk1RPBjV0ZrLErhXx6Es1B8rYQBey4yx-A0OdsqoUZtM4KyAoicIeugoGLh_fLtlZWaGUle7VIOI4G42MruijqH0RWwslKc.png)
            - Thread.isAlive()→![](https://remnote-user-data.s3.amazonaws.com/q0XLuQlJfUoUG4w-YihNTusZMb-hWUqBMbTC8cVKQv-gnWD4KzFLNSHRf4xTc3V5glKpPNKT9NTcRwR0hlgkSkkdsNPz5XrJ2EtNpQCMBSRX4yBzD_jq0CBaSLepYQMt.png)
    - 1.2 Executor Framework
        - Java Executor Framework→Used to handle a larger number of threads. (Decouple creation and management of threads). It handles thread creation, by adding them to a thread pool. It manages the lifecycle of the threads in the pool. It handles task submission and execution.
            - Task→In this context a unit of work (piece of code) which can be executed independently.
            - Types of Implementations of the executor framework>>>
                - Executor→contains only the execute(Runnable task) method. Time of execution is unknown. Is only used for thread creation.
![](https://remnote-user-data.s3.amazonaws.com/ZvZXy_2OqBw7hiw-VXNJn2j5WQuUsp1L9vsIIJGXYoRGiA8F0qUjccbBc1YEVCvUOtZU_Ta9T2eGMLUwflQqQEhitIW6PRQyxXUvypSTKbRduosqqD2YZhQ6OTTHmS97.png)
![](https://remnote-user-data.s3.amazonaws.com/G9IJ8Kzcp9v8wH5TOMnWmKXdJ-xiVyAft2GMVfNJIB4d2NwCLMJU-tFUjmikqAs6VExfexilTQ-HGow_DUmiQs76IiNe6rTkPL2-kYM4QmbTfOid_IYWy7TM0Wy4zy36.png)
                - ExecutorService→The ExecutorService adds functionality to manage the life-cycle of the tasks. It provides methods to terminate (e.g shutdown(), shutdownNow()). The additional submit methods allow tracking progress of tasks by returning a future object.
![](https://remnote-user-data.s3.amazonaws.com/jhH8ls4nEZeKkAbcErJ8fmU_9Lh5YW8yrtvArbNterI2Xl46YEBNjFsiuLUdJohO96eKMNLjD4jxT8lEvEM7LiIOMEicUgxpJspSAGNH-KCrKVyEEPf9Z9rIJsP8nr7F.png)
Like the Executor it has more complex implementations like ScheduledExecutorService.
                    - shutdown()→Stops accepting new tasks but completes previously submitted, running and waiting tasks![](https://remnote-user-data.s3.amazonaws.com/vcALrqBMkutnpCr3vh54374evUWgqpmrfBSWHxmwjvmsn7G9YsWm9drYaTO8r7lfcrRQS6SVC6hqlFaOrMEQEUwRAEr4A8qgGaONJEklnLYi6llskFzZmErTZpudApGc.png)
                    - shutDownNow()→Attempts to stop already running tasks and returns a list of the waiting tasks.![](https://remnote-user-data.s3.amazonaws.com/MOeAhQmUgrsvz5XQm1V7VUu2KfW3hcfLd8I4IchD6oEu_jVxA_u7B87C12yljVLoXBF4wURTxfNFsUiqrYTI61_oFn1nfF4gcrY8d8J-BUPWOFaV9K5So-5YP4g9qn5K.png)
                    - awaitTermination()→Method that waits for all tasks to finish executing after shutdown.
![](https://remnote-user-data.s3.amazonaws.com/x2LAO0Hp77Y1K_xZMeSm3qmwUiYhh6dLheuAs3BtZuothpD-c3Joc4ek4P4V2ZpNHA2yLos_XcmLAF5iM_OGFs70OguY8CW_vUSMJdWoNgPh5jIWcxfnTkhb7Gh6unFD.png)
        - Thread Pools→Used by most ExecutorServices to execute tasks. Tasks are submitted through an internal BlockingQueue. (If the queue is full, new tasks are rejected)![](https://remnote-user-data.s3.amazonaws.com/L3CgFzlTh819YEIcea0isJBAp_6GLpxqBRI1ZMuyU8SplYv-qY9z51N6iNsRWi1JbkMbmzB5SlCU8ko0xl58HGnqB1uGsI158yHlPGiX0qRFwyroYQSQHxaRYJ579HZz.png)
            - Worker Threads→Are managed independently of the tasks. They are created and started only once and are needed to execute tasks (Runnables and Callables). 
            - Example Code for a Thread Pool→![](https://remnote-user-data.s3.amazonaws.com/xI8mLoJJIIjfgMU4-pjMF8Z_NHJee1oKD6ZXxWAGgDwjIDoPDIuU3QVwEioi4V_MVk9OwOrFI7gHTvhCJLy9jr7Z3DJPQnB7WzDvVcGn5N1WFsMZVD7or5bQl2ye_xgH.png)![](https://remnote-user-data.s3.amazonaws.com/_KgNM1bzYsr09QV-HjGQQ35f8gidrJaYs-q_gUTBGJZo-ZbUO0ldoCIYxRYU0AkJLI3HdENQvGrEoqKGpQJqUy5tT3CsbJotguRq-ucuSKAc9KoaZZ_51EwX8pTqSMKr.png)
            - Types of Thread Pools>>>
                - SingleThreadExecutor→Contains only one thread.
                - FixedThreadPool→Creates and reuses a fixed number of threads.
                - CachedThreadPool→Creates new threads as needed but reuses previously created threads. Idle threads terminate after 60s. Ideal for programs using many short-lived asynchronous tasks.
        - Scheduled Executor Service→Allows to execute tasks periodically or after a specified delay
            - schedule(Runnable task, long delay, TimeUnit unit)→submits a task that executes after the specified delay.
            - scheduleAtFixedRate(Runnable task, long initialDelay, long period, TimeUnit unit)→Executed subsequently with the given period.
            - scheduleWithFixedDelay(Runnable task, long initialDelay, long delay, TimeUnit unit)→Executed subsequently with the given delay after termination of the last execution.
            - Two Types of ScheduledExecutorServices→ScheduledThreadPoolExecutor and SingleThreadScheduledExecutor
            - ScheduledExecutor example→![](https://remnote-user-data.s3.amazonaws.com/OptCV3CbhY2HMkhE2iCbG7Qt17c8tM5OgUazJaxhGADoKSJrL1wd4700zxbc7sWP7g1P6fDx4X50fdT3AwfEYaCjYVgmmXYZJ1Fzp_ncFYrZAg4X38BBVxJm1onSvVxs.png)![](https://remnote-user-data.s3.amazonaws.com/rrfbAAdc28JbxsIfL4ddL-pLaPorVt6k5KV_X0Ns595hCuikWaIJXqof8YMRiTz1kSy9Kw77lRDRvuCVFYCJWx2b9Ra1wwVx-VR9fBJaWYo8NJcBuLDnJUIpkHMbu6eo.png)![](https://remnote-user-data.s3.amazonaws.com/3AaeNOin81-PZUFG-MnClWQAuxyuCFzoc7xZn4OHy-qnPtluHzlzMaRERovfTG4XdGF-MlOtm99DCR6yDliq-_V_AODirvfJxnoKxC_RN9-pGHsTDDLtlgzmDFnzWdUW.png)
        - Java Nested / Inner Classes
            - Static nested classes→Used for tight association with the outer class. Can be public or private and can access static private methods of the outer class.![](https://remnote-user-data.s3.amazonaws.com/JG_VPmy7QkfBt32dvMlE9HN3F0kJVFlr4KooYxSg55Zyi2k1olSudvIeK7IeObKMk7PN0pUrEHUpLMmhk0qYxcTso64jVabpf7lxJfZWTa83UnxAG5CMGun2ANl6ybgw.png)
            - Inner Classes→Are classes inside of classes. They are needed if it is only used within a specific class and needs to be hidden from the outside. Could be an enum or configuration value. Usually small and implement only very specific functionality. It has access to private members of the outer class. They are a security mechanism, since top level classes can't be private. 
            - Types of inner classes>>>
                - Member class→class inside another class. Access to variables and methods.![](https://remnote-user-data.s3.amazonaws.com/xYUfyo12CTBgdXw8KuxxwYnzhUWP9ijKKZcIGlKHL8FKpO8igN2S3LzsLqk3N5QY8RVK3k2BkTCKtIEK7g3undy1Vj1UbhZsBNxdB3hh5AH7diOe7JYGnqmf_sGIOvja.png)
                - local class→class inside of a method. Access to local variables.![](https://remnote-user-data.s3.amazonaws.com/-NMShhgCXobaQo6swATzNsB5A8djV3YmJqQwy78bDP8YGkFbINaHon6SU5vhcwKkt9XJK1MP2Z6MfGFMb_e6EYtBzDo8lWQKbcHt-g5ztC-zwV-ejy8bxsHo4XWUmASg.png)
                - anonymous class→local class definition without a name. Only a single object is created.
![](https://remnote-user-data.s3.amazonaws.com/67j7gJtzz0C3h1yPVzkHNwL42GDuUNPDe18ewHDnVLBZ0N66Z8kRoQT6KcIxojq3pCI_kziCpZhHGNcdGZrp1oOp24hbq5YGBUJRLT6S81UQXqOdQw72CNL3QVsnuHVA.png)![](https://remnote-user-data.s3.amazonaws.com/gaM0VyFzbqlETZSLiMwU1-ODVB8fhzWpoOjQw3wz74u0tqci0Db5B26bbHx9q4RRLX-o8XeVSetSfLQ00KeagMly2UyLfwiEonO6ndSj0in1C6gRnnai726zbSJsLsoL.png)(Special case with a name)
        - Callable and Future
            - Callables→Similar to runnable, but can return a result or throw an Exception. The result is contained in a Future object. Instead of run(), call() is executed. The start() method exists only in the Thread class, therefore it can't be used for callables, they should only be submitted to ExecutorServices, since they start them in a new Thread.![](https://remnote-user-data.s3.amazonaws.com/O_VxW8ZDn-EMXw2EhJzHe9huM84MjzG03dFKVZ0rkS2Pyf96KYajw3PK6vQFl2-u9CHB_eusHtIiFyipJEEXkvLNd3a_hXpIoz1QvQ4GphzGhMka1Fc2KkD7vv3v0y47.png)
            - Future object→Is used since, it is unknown when the return value of the result will be generated. The future object is only a placeholder for when the return value is ready
                - Future.isDone()→returns true if the return value is available![](https://remnote-user-data.s3.amazonaws.com/VnOU0clItbakHtoCV6C30w8sBrO-K2ekhxDewcdJIqXf1gzJqXmZGgzWwpNwA5dRglAut24nnq9k0saUOlMZ5qvanh7q4S-hunpWU3vEjRx4K4Qk_vjaJc10teOd9mYO.png)
                - Future.get()→returns the result, is blocked (thread pauses) until the task is completed.![](https://remnote-user-data.s3.amazonaws.com/75rRylSYYJvz4RSxRa1DFfR0U9waj1ZPMTi8afvnfIH9unKedf22T9tti-__NxFWvEWmi-4suxRYxLusn7qWHnshH5XOGyFqUD1o91BDiJTRLH1DZu0uXSnYzNtYSTIH.png)
                - Future.cancel(boolean mayInterruptIfRunning)→Tries to stop the execution of task and returns true if successful. If the parameter is true it will try to stop an already executing task, if false it will let it finished.![](https://remnote-user-data.s3.amazonaws.com/j9bC0tki-Jh2Kz_nzdCdV3Gh98FW2XLJE0PlE4fvC9ox2odJUkE5UFkgT38pfSB0B00IQnGzC0LMno2xZExet__HEmxWAQW3P3iLcQUPT4BLTMEiS1zgzvPIpDItgG25.png)
                - Future.isCancelled()→Checks if the task is canceled. Future.isDone() will return true.
                - Waiting for multiple tasks to complete>>>
                    - Store the Futures in a collection![](https://remnote-user-data.s3.amazonaws.com/cmKYM5WmgP81HV2c-h2SutO9Ld6m4YUGy08GnwFXTILaR7rVvWbU0uXTC4DuaEgoeEyBT5xjI3Fu1_ReqYZ19Zt--Z0Eb0MQ_UFwYJZVxGVgJXlUeD_yAy7aXPykw5ZJ.png)
                    - Use ExecutorService.invokeAll() ![](https://remnote-user-data.s3.amazonaws.com/xYcDGB_6e2q_VaHe5v2QPru-Focm9UXw4b0IdgBnp16Auce3CYu9eva2_hx3Ekn9BdvGL6Xj_1zjPVmd2IhXSYyu_OEfIrz1hrEh40kH8usf9Hrt_9-0PUvRmHlDkeUk.png)
                - Waiting for the fastest task to complete→Use ExecutorService.invokeAny()![](https://remnote-user-data.s3.amazonaws.com/xKdiI5_iOsDAZmWQPa0vBEcVxZ_8Qiy8A-svZkOuGD2F3HlCTmdegMEdrkdPLjw_Oui1TihB0f9wcMOyyuC8Vgh5zbpnW-CnaURsipJa63hGbKafTcIOOOXTn50MYi3d.png)
        - Annex
            - Size of a Thread Pool
![](https://remnote-user-data.s3.amazonaws.com/vKnz5I2bitnwzNVncqedBS9ob18wMA5Ch6D1kuifFwCFww5MajWDkkyqowpOxfVmWKZOTTxexyX9UnPwHzxE7JLLOVojDdsvHZ-JlpZJ5bCKgieuuFynTMhjzbfWfEHq.png)
![](https://remnote-user-data.s3.amazonaws.com/bvrxV_348e-vq5C7PSv5V4bagtFMwSDbCWa0pbfIIAsRJFbP21z93teRY_5KQJbL3JWXNcfWV4zEho6lvY5beDPhHwPmR4TQ9Ilm0tm49EAVYmsUE1H4ih8Eku8_kXnp.png)
- 2. Graphical User-Interfaces
    - 2.1 Foundation 
        - General
            - JavaFX→Library for GUI development in Java. It has CSS like styling and uses FXML files. It is the successor to AWT and Swing.
            - Components of a JavaFX window→Stage, Scene and Nodes (Scene Graph) ![](https://remnote-user-data.s3.amazonaws.com/CQmoLaeI7W8GKL7KUk5RByhjHVyqRsusxcp-2e1Io_KWt0qJpdqwzJ_oNB8VCEKLom_8P7LzLd64I_nkq8yHBHxCNtE2Xgz9UldJyhlBhdaX1tcYYPjsfo6UYYFybcgh.png)
            - Scene Graph→Describes the structure of the scene components and has one root node. The actual scene graph has to be modified using the JavaFX application thread. It Is forward directed and cycle free.![](https://remnote-user-data.s3.amazonaws.com/9lUCuM-2UajovoxVD6sf3AIPKEH-oOp4Yd1a_kKOleqkDGk7uCqSqfjGhXOXc2ZaGs9FeR-PxN_U1K_9LUHw0cEbfZB-TzZFe3foM3iywfyuYd5id8DZgbGvIAD6A2RS.png)
            - javafx.scene.node→Abstract class representing any component to be displayed in a GUI
            - javafx.scene.parent→Abstract base class for all nodes that can have children (container nodes)
            - javafx.scene.control→Abstract base class for all user interface controls
            - javafx.scene.Scene→The base container class for all content in the scene graph
            - JavaFX component hierarchy→![](https://remnote-user-data.s3.amazonaws.com/QIao-inzeAssO1ekpQtEmZlHKS6RY6UZrSQ3y9ipSDAe1Y4eWF4HKUfXU80s5elXOpTDBJtIm5fUzqaTlex_z9sVxYgCokBu4Z1DfTLXUFm5hHvocD17K_VkBOBF5_7_.png)
            - Code for a JavaFX hello world→1. execute the launch(args); method in main
2. Override the start(Stage primaryStage) method from the extension "Application"
3. Define the root node with with. Group root = new Group();
4. Add a label to the root node. root.getChildren().add(new Label("Hello World");
5. Define a new Scene object with root and size. Scene scene = new Scene(root, 200, 100);
6. Pass the stage to the scene. primaryStage.setScene(scene);
Optional. give a title to the stage. primaryStage.setTitle("Hello World");
            - Methods for position and size→setLayoutX, setLayoutY, setPrefSize, setMaxSize
            - Methods for appearance→setFont, setBackground, setTooltip (setStyle to write in css)
            - Applying a css stylesheet→URL cssUrl = getClass().getClassLoader().getResource("MyStyleSheet.css"); scene.getStylesheets().add(cssUrl.toExternalForm());
            - Define class or id→hbox.getStyleClass().add("hbox"); myOtherHbox.setId("myHbox");
            - Other control types→![](https://remnote-user-data.s3.amazonaws.com/Xk6oXlk872zzZEqGRZ1HIoLI1gINmJUINQwwuHE4Rul9U6d_Xr6umX8ClCx9Ze84bQHLNGr2A_LhWe076AZGS7Vzi0eXUNQmS3mSM8Cv9k9g7SUeIS0Lzab1ts0W49i7.png)
[Part II: Using JavaFX UI Controls (Release 8)](https://docs.oracle.com/javase/8/javafx/user-interface-tutorial/ui_controls.htm)
        - Container nodes→Combine several node objects into a single formatted node. Its settings apply to all its children. The region type is the superclass of panes which specify layouts.
            - Panetypes>>>
                - Group→Children keep their size. Container just large enough to contain the children.![](https://remnote-user-data.s3.amazonaws.com/5dd7pdIEGbqsFAv-K74Vwnu6WM7yzKr1IzinXud_tgdnaKrh3g7dwaPx-KJ1-0PYxu-DeMDl7VPW8l18v0fbhK6vXffZD9qsLUC0Prnma9dDMyqY71kHyYX73X6u14wb.png)
                - Pane→Manual size and layout of children, makes clipping possible.![](https://remnote-user-data.s3.amazonaws.com/G5rbFAKDHpUdL0NlyP1W3o68j9QrumEKVDba0jFAbb68xcb8Sh4X1LAXNYWIn73Eql1GYTIp9a7arYS_vbbjqTlUMy90ZtNIGpwLUxiqlfvQdOFGOaSLMSlByMmb1QoY.png)
                - HBox→Horizontal arrangement of children.![](https://remnote-user-data.s3.amazonaws.com/efZCKW7FSCWiUUWlew_wSifkGWbMmoXdgl9mNnCzhWCcCx2CsAm_z1R3pak60ASF2sqOAMFjsNaxSuUygMLe4ZS9YL8_9dYTNVxU2FGWUN50RpPbdNN_s5cXJa62edEm.png)
                - VBox→Vertucal arrangement of children.![](https://remnote-user-data.s3.amazonaws.com/v_Izn5USHpxnkO0CHw2TA6WItm05g3fgX764h6vrJpLK6z7keqLpf0nIulFcdxqDaeV-KEAFqQg7sy4y9V2eZgomG57wQhlvynrR2CrYmhSuXyFL0GI0_M7dULUY-Xgb.png)
                - BorderPane→Five regions. It is not necessary to use all regions. setTop(), setLeft(), setCenter()...![](https://remnote-user-data.s3.amazonaws.com/EAL1TpjDQb4vYbXNztCK_VpI5Musm6mQm9lAkFTDQPspB48cx-6AmeGh2OSKsv3aNvdbpz5QRym20gZCSsNDKD-inOmQSJTNkZpigOE5WfErCwIa9G-hUrvhmdN9RtSk.png)
                - GridPane→Table like arrangement, adding with .add(Node, column, row)![](https://remnote-user-data.s3.amazonaws.com/kI-Co13n9m9AIZf8iotqMyvbPV6KkfptbBLdDFs9Ii3_mQtNA9rdOmrQHc6oUgboKlG48kG59XSFkCdfNeHxvlI23xxMxmrizqic1pBpwAEW78IQJQ9-iX5s0gP56uEf.png)
                - FlowPane→Automatically arrange additional nodes in new row/column when specified size reached.![](https://remnote-user-data.s3.amazonaws.com/QFqRSeLrSDV_W73z-vhpg2bPmWtPeJPXjXmRDzmxm0OC0iYDXa4-sszY3AWpDuRQmlICIGWKD4OeHA0-u_BwHOaeuLnltDMbFJQUZAm3bM3O6hqJCgq_36KqBJeJFoqi.png)
                - AnchorPane→Nodes can be anchored to edges with .setTopAnchor(Node, dist)![](https://remnote-user-data.s3.amazonaws.com/nkzdhpep1fkk_iqhU0l67_tFQFBN53M_V4fgJyEDiS2zIA6G2h2NJo_kvYShuznxTnhvDRNM8nrFVfjVd01pfwSHgjBlbFDfotmakUJlJjAH1Yax2n-3WAKVy6kUV8L1.png)
                - TilePane→Every node get the same size, in a grid format.![](https://remnote-user-data.s3.amazonaws.com/b0Y0Tuo_FOXm05bMHkhAtX3zepUO8UMeXfLsXyUIIIEzKBvlhrrVArLuTrRfaLiPdh43EGgrbRcyd2F9bTi5A9IgOc7Re34mABRz7EcTjWQ9zMj1qLqsdz4g7Z-uRj4v.png)
                - StackPane→Nodes are automatically centered and on top of each other.![](https://remnote-user-data.s3.amazonaws.com/MD4tGk4py0Rwggorodc5EFyWapn4DIRt8WU64fImdYwnO1NLacembfMIEHvrKlzYG_AG-efJcbtKwZnQq3jGY2Rq_7ADkrrCAKKuaW3w1mytrOCD2NRuizJaU2xeEZ7a.png)
                - Adapt Layout→Each node can be a container node itself, they can be aligned without being in a specific layout already.
        - JavaFX - Event Handling
            - what happen when calling launch()→1. Creates an initial window. 2. init() method is called, which can be overwritten to initialize environment. 3. start() method is called which must be defined. 4. Waits for the application to finish by calling Platform.exit() or having the last window closed. 5. stop() method is called. (Not executed if System.exit())
            - JavaFX startup threads→JavaFX application thread is started on launch(). Creation of scenes and stages must be done in this thread. The init() method is called from the launcher thread and not from the javafx application thread.
            - Types of Events→Physical events like, InputEvent, MouseEvent, ScrollEvent, KeyEvent and Logical events like ActionEvent.
            - Definition of an EventHandler→![](https://remnote-user-data.s3.amazonaws.com/vp72qcQYNiD79d4iNHb3wSBlLTCYPgdG-tUwywhLx9GVu6fqge-L83rickGShB3d-1gXYTw_2MlufzymAKCG2ss0PZxSrjXbNGQZEdQCThkVN7pdHE5_D2lOvLEwNSVF.png)
            - Declaration of an EventHandler→Every Node object maintains a list of event handlers. Dont create multiple instances of the same handler, rather reuse it.
e.g. node.addEventHandler(MouseEvent.MOUSE_CLICKED, clickHandler);
e.g. node.setOnMouseClicked(clickHandler);
e.g. node.removeEventHandler(MouseEvent.MOUSE_CLICKED, clickHandler);
            - Problems with EventHandlers→It is expensive to write classes for each EventHandler, you can use anonymous classes instead, if the event is only need once.![](https://remnote-user-data.s3.amazonaws.com/VR82RpROeWwPKa7eosCJYfGc7jhdrQun1GD2gFw2dt802Y5GuEv4jwvjZTFpeeLdcyQe44TEZ0zOQNOHpJS5LSnF-0Y4A1jH32M_Z02-wB1AAqXg0e6HgsMyK4H0oKoB.png)
            - Event handling sequence→^^The Event is created in the root node and passed to the lowest node where the event happened, on each step EventFilter is applied. Then it gets passed back to the top where EventHandler is called in every node.^^ 
To prevent an input to be consumed e.g. MOUSE_CLICKED is consumed in button components, add a skin to the element: button.setSkin(new ButtonSkin(button){{ this.consumeMouseEvent(false); }});
        - Annex
            - Using dialogs
                - ![](https://remnote-user-data.s3.amazonaws.com/CWeDyN5SKQjascXJAbJfnByZQRtpOejgRNQC55RZEz4_CSuplrnMVui_EeRR8G4TZ9kaoN9Cw5qBU5J4hCIJ4_q4U_4fs4Y3B87PAdVn2o5sfBApEt26L4ENbrzYYG4A.png)
                - ![](https://remnote-user-data.s3.amazonaws.com/sDgCz80dtELMRJBlvfYLDBieT1fp-zwlpgoGnwDDgEfANcWBqGuB8SxmYnkcC9aqkSkodD7T9ZV56slyx4AM1ZcwV77Klvkm0HuLO99H3IHGl6UsADtqJ4YYA--C7nMw.png)
                - ![](https://remnote-user-data.s3.amazonaws.com/mgmRvApSdj5j30o0co4nJ9bkxci3-G-b6ZA9c6aT0yQjquRJGLKhHh9iTlPqztE9Vd3l3DWxgmdwgh2iNuljAhL8-yNi_VC8etpcJk6WmaemTlB-QcX71K1GpTmbjkO6.png)
                - ![](https://remnote-user-data.s3.amazonaws.com/SwncppVQWYGazRe08FmTlFE3F5LSGJP6WUblSht0SMPzBVHQnln9jd7DsMtyKZN0HMwJGsLuP7IlVIAf6Ovxlr6ilNWpWdSO1i69NL32eBRnshuj8kk9wbcZFtdxwI32.png)
            - Event filter
                - ![](https://remnote-user-data.s3.amazonaws.com/sLS6V7AHISPrjRc7BgxxL0jnTLhKVbUUZmCiiYBSAgV5gn9fkW-tf0Gb2zh1bouNj3yQOZy9RLpA6jmKaAuumS9W2tXXRSTMreusd4VaM79a8Lh3Ot3elAckeyofhRpb.png)
            - Method references
                - ![](https://remnote-user-data.s3.amazonaws.com/E2IGCwxWfRXnN3uMiC0hd_0DH305l2vGtf73tb2Cu8RAImwNNzpcnR1gokzRMq9vSzXWjFHFd4Lta_Mmi2rjfv4Sx8Q4dz3Agehm5RtCplUm2oVPXpwKVIf725KkP5lv.png)
    - 2.2 Toolbox 
        - The Model-View-Controller pattern (MVC)→The goal is the separation of concers, since a main principle in software engineering is single responsibility and so far we've been mixing logic and presentation
            - First separation→Split the program into UI containing the GUI components and their logic as well as Model containing the data and domain logic, which is independent from the UI and invisible to the user.
            - Second separation→Split the UI into View containing the components, which knows the model to query data and listens to data changes as well as Controller, which reacts to events from the view and controls the domain logic.![](https://remnote-user-data.s3.amazonaws.com/KuCPnbC5AMWwwDIItcHJQX4Sd1a8a7ol1B-TD-FrvH0UvPqQcJkdCFJT_baSNO7jo33l122XzDWCSJs3xZbgi4GG_uBvi_HQO8Biq3Vy_29-jbmx2Hvx6TWl32FKSr5T.png)
            - How to update the view→If the model calls the view it violates the pattern. If the view polls continuously its a waste of resource. Therefore we must use the observer/listener pattern.
            - Benefits of MVC→Independent development & testing. Multiple Views/Controllers for one model. Changes are way easier.
        - JavaFX with FXML and "SceneBuilder"
            - Setup controller and view in code→1. Create a class for the controller.
2. Define the necessary Control Nodes and Events in the controller class.
3. Create the controller and setup the Control Nodes.
4. Add setOnAction() events, using the controllers events.![](https://remnote-user-data.s3.amazonaws.com/xopZar_iihF0XfsubiNdNpuVDFwHNwgYYxfZIqrI5_l24BYdGG97w9ezwSX88qEjmf38S9wenFjBAeGpXTTmIr9SfSTkFn4kB-CpqQbrsMTcKvvJndKVp5YSc8GkjJrb.png)
            - Setup controller and view using FXML→1. Define the View in an FXML file
2. Reference the controller class in the upmost Pane.
3. Annotate Control Nodes and Events with @FXML in the controller class.
4. Use the FXMLLoader.load() to build the view.![](https://remnote-user-data.s3.amazonaws.com/Zrzdc7Jty9SMn8fdGyF_PHVf32WASRbOxxvOsMgpk6QVQ-3dxigJG-pbdcHyjNfLTHqCswtCgBA2fgMldHvuSIGCMGkCYNDlWK1wxjCCmI6h7BxPiw47jge9hyrG3fdg.png)
            - FXMLLoader.load()→Builds the scene graph from the FXML-description and returns the root node. Creates an instance of the controller, accessible through loader.getController(). Initializes the @FXML properties and creates EventHandlers for the elements having e.g. onAction="#handleShow"
            - SceneBuilder→A tool which can be used to graphically manipulate FXML files instead of coding their design
            - MVP Pattern→Model-View-Presenter Pattern is used in the example with FXML. There is one presenter/controller for one view and there is no interaction between view and model.
        - Observer pattern→Provides a one-to-many relationship between observable and observers. When the observable changes state, all observers are notified. Observers add a listener to the Observable. They are loosely coupled. Listener is a synonym to Observer.
        - JavaFX properties
            - Obserpattern in java→Provided by javafx.beans.Observable. The couterpart is the ChangeListener as observer. For single values use ObserverableValue. ![](https://remnote-user-data.s3.amazonaws.com/kfV_DvEcBiOideI1gHMpZiOlm5z_zTLSHipsVx5C9WkYfKLO9HbE5TTzxmPa-PEBdNpulhjCNL-ZoAXAzUKo-fynOHmlmq7Ge2k9JqgF8Oq1NX-__0GiUEF8e5Qa7tOX.png)
All JavaFX components are wrapped in javafx.beans.Property which extends OberservableValue. ![](https://remnote-user-data.s3.amazonaws.com/XxRjwZ4Czql1Fk7iEBPzAvp6l_0yzVaPpQjslyG9_arf8Wiy2RrvGm08SfTAp7jxmAkSaae9Auowq3Fvbe8ITR-pF4rvSe_ZzUrZxr24mU8FQTyRT9UW2hXde3sE9S-q.png)
            - JavaFX bindings→Used to notify the GUI about changes within GUI classes, instead of the observer pattern needed for the model. e.g. A Rectangle has methods to change its height like getArcHeight, setArcHeight and arcHeightProperty, it is possible to create direct bindings between two properties with targetProperty.bind(sourceProperty), which updates the targetProperty as soon as sourceProperty changes. ![](https://remnote-user-data.s3.amazonaws.com/-e55KgES2jL6jCIkDmECnjpi70Ba5sI68frvMsRzWt7rPo0mNdZx7ncKOA41yrOL_NSKZ5jp6bYOh9WW-owrBfkPK7ONPq7S6ZhZVZ_LIRz6rlww3NpcBYX7bzH8B29_.png)
        - Using of multiple windows / scenes
            - Ways to show different content→1. Use separate windows. (Instantiate new stages)
2. Show different scenes on the same stage.
3. Replace parts of the scene graph. (Not discussed here)
            - Open a separate window→The code is similar to opening the initial window. Load the root node with the FXMLLoader. Attach it to a new scene, attach the scene to a new stage and show it with .show().
If the windowis used as a dialog display it in modal or blocking mode.
                - Modal mode→stageOfNewWindow.initModality(Modality.WINDOW_MODAL) prevents events for the owner window set with stageOfNewWindow.initOwner(stage). 
stageOfNewWindow.initModality(Modality.APPLICATION_MODAL) to disable all other window events.
                - Blocking mode→stageOfNewWindow.showAndWait() blocks the the code execution at the calling position until the winow is closed.
            - Use the same window for a new scene→The root node of the scene must be replaced. To implement this effectively save all views in a HashMap and give each Controller the reference to the HashMap. Each controller should implement the same interface e.g. "ControlledScreens" which contains a method setting the reference to the hashmap with the views. ![](https://remnote-user-data.s3.amazonaws.com/zaAw74u_itD1NgD6CgG44yW7oCWafiiHA6CjjR_3CBujqKCUzfbKcXj_WusvO8rOF3sNzQDgatCUKIG3tmsOKd8mVNFVRuJgFbGQsPe2jIAOpB_2V8wkfu4zDw6TTpoU.png)
        - JavaFX menus→Menus are a tree structure of controls. The root is of type MenuBar. Each Menu may contain instances of other Menus or MenuItems. Some MenuItems have state selected like CheckMenuItem or RadioMenuItem.
            - Implement a menu hierarchy→1. Create a menu bar. MenuBar menubar = new MenuBar();
2. Add a menu to the menu bar. menuBar.getMenus().add(new Menu("File"));
3. Add a menu item to the menu. fileMenu.getItems().add(new MenuItem("Quit"));
            - Additional menu functions→Add an image to a menu item. menuItem.setGraphic(new ImageView(new Image(getClass().getClassLoader().getResourceAsStream("icon.png"))));
Add a short key. menuItem.setAccelerator(KeyCombination.keyCombination("ESC"));
Add an action event. menuItem.setOnAction(e ⇒ Platform.exit());
            - Create a custom Menu Item→![](https://remnote-user-data.s3.amazonaws.com/47nDMcTObwu41ABd5CLu34UHfOwGzG6ZvxWL9rx3kAbH9l9Zc_QhmNwHArFpf_lDagFuWDShMpp1XeYwPL6XNZZtrH7k9xI9TYZumKt_hjyubkD0Okf2cEqzn3Yab0Tr.png)
        - Annex
            - transformation
                - ![](https://remnote-user-data.s3.amazonaws.com/F0iFroQ4yrjbtOOb9l_MdmRuVenTpRkjjsdZX4YOEL4FR_W5DEfrWDffEuHwOVPDItU8qWJJfBXnK3Mh3t2CPiIJFdd3P1O6b5thTAhAp9hgfdaoZvndx7DTJAlO6jjB.png)
            - animation
                - ![](https://remnote-user-data.s3.amazonaws.com/9IU_ne8-_TQa73Ap7NADJ5QXRZt7t2nipKkSjiTIo54vObyagh8Hc-O55BhN6jYup5YzeRORkBSunR32zP5ienWtB_mMoLDvyZanMdHFnGTLuckJmBkeXJ8EJhd7g_gx.png)
                - ![](https://remnote-user-data.s3.amazonaws.com/vrW2cq5Sg7UIDLK58dVNyFI2Bea9iFiRLatIfIkbSucMHucYmNeFzEvkqIQHVuzOSEKVeZwCR9HiLD01DCHEgNYbif6ClEDdQFTQryH6eBIgKrNoA5_JZlyERviUVhMY.png)
- 3. Concurrency Cooperation
    - 3.1 Thread Cooperation 
        - Problems of concurrent threads
            - Mutual exclusion↔Using shared resources ⇒ critical sections need to be secured, e.g. two students ask a question at the same time.
            - Condition Synchroization↔Order of events is critical, e.g. A cook salts the water after he cooked the spaghetti.
        - Mutual Exclusion→Maximally one thread accesses the shared resource at once. Code blocks that access shared resources are called critical sections.
            - Whats the error?→Example accounting. If we have two threads that add one and subtract one from the same account we dont know if its gonna equal out (as it should be), be one too much or one too little. This happens because when they read the account balance at the same they have the same amount saved. ![](https://remnote-user-data.s3.amazonaws.com/S4ZJRyQWDiswpfMDpY-aiXNqAUpi7JIYO5Qr0RdlnAn2jG3zpfofqQgp1v3g6YVusWq5I9QjRsYh2rp39Ux3Skj0K2TX0NILmcAjNcms68irLQVHtSg4wdaupoU8uYyD.png)
Since Threads use the same address space and are generally not atomic(can be interrupted at any time) this problem occurs. The results differ each run and are dependent on the Scheduler.
            - Atomic Types→For some basic data types Java provides atomic variants. Atomic Types allow only one thread at a time to access the variable, they offer basic functionality, but more complex functionality is not possible. 
                - Atomic Datatypes→AtomicBoolean, "Integer, "Long, "Reference, "IntegerArray, "LongArray, "ReferenceArray.
                - Atomic Methods→addAndGet(t delta), getAndAdd(t delta), incrementAndGet(), getAndIncrement, decrementAndGet(), getAndDecrement(), compareAndSet(t expectedValue, t newValue) (if currentValue == expectedValue it sets to newValue)
                - Atomic Library→java.util.concurrent.atomic;
            - Mutual Exclusion Busy Waiting→Create an infinite loop before the critical section that gets released as soon as the critical section is over. Implementing it with an AtomicBoolean is even better, since the boolean could be changed by two threads at the same time. ![](https://remnote-user-data.s3.amazonaws.com/iHsHzK80I4dNvIamdvx5GdtU45JJWL8iMRH22NOxRCI_qxqct2ysMBnBy5wuLjyMHh7FxWjnlOPdPfPVHniha3GNe-AM-hRWyKYKVreJGehEFSxP5jeJAfeDlFoKhl7h.png)
It is still inefficient, because it burns CPU cycles.
            - Mutual Exclusion Synchronized→The synchronized statement marks critical sections within the code. It can be used in the method declaration or in the code block itself. This is based on the monitor concept. ![](https://remnote-user-data.s3.amazonaws.com/Ck2BKVOjfaxgcP9mdZBcav7e6aKSaBWM6s_3UXQLAP14OnUrZl1Jz1ULjwwXAMuy3R2cY0lN4w7oHL7oJbpSgAcRNU9fyGhHKIFnbksXw6w2zeFpV2dNN_7NeSUHwdSW.png)

                - Monitor Concept→A monitor is a lock which is acquired by a thread when entering the specified critical section. After leaving the section the monitor is released and can be acquired by a random thread waiting for the lock (order cant be specified). 
                - Monitors in Java→If not specified the monitor is the class itself "this". But the monitor can be every Java object. Therefore the lock can be acquired by the same thread repeatedly, if a synchronized method is called in the synchronized method. Using different monitors can also be dangerous because they could result in a deadlock.
If your using synchronized on a static method or specify (Myclass.class) it will be a class lock instead of only beeing an object lock. ![](https://remnote-user-data.s3.amazonaws.com/s93H_qEX2FGQMK2xriVO2xlljvvak2h3qAYCh75CEc7Gcqc4dCYb695-wUofyDywNNQ3pEM1hK4mgZ68XZZshV53KHgHhQwW2H1b7kWuPsDXVCuy6tGZ9CNZIHIXuz5n.png)
        - Condition Synchronization→Thread waits for a specific condition produced by another thread. The problem with the synchronization keyword is that the next thread is random.
            - Producer-Consumer problem→The consumer needs to wait until the object is available (produced). Producer needs to wait until the object is processed (consumed).
Example Clock: One thread increases the seconds and sends a tick for the second thread to increase the minutes once 60 is reached. ![](https://remnote-user-data.s3.amazonaws.com/-pj_g9nfvcITIgzZEs5B0VN_w13E5TFMVg0ENpOmU7zbIvmexoOr33zBr3ZpMsyFnmEdtBpbponUyAvIKmbjVC7VRA2X4oVy0-9914hGjBT9I0ijDP0uDb-zLyU01Tpb.png)
This code causes a problem, because second cannot access the same monitor as Minute.
            - Extended Monitor-Concept→This is the solution to the Clock example. Instead of using an active-wait, use a passive-wait, where the monitor is temporarily released, while the thread waits. ![](https://remnote-user-data.s3.amazonaws.com/0Ocj13I0SlFP1dc3z_93qDZJlGkbpLznM0Y21nmmwIW5jlaoVrzJ6T3F61lDQucrscBWy_EZ9HU64agx3Mia7uHmq64dlnkaJ5_tJhacALnw6joNENHydRAa_uqVrrr9.png)
The second version of the Clock implementation would look like this:![](https://remnote-user-data.s3.amazonaws.com/LJTYewqtRd8gpRom29SDMBjWsk2NRX8NJ9c5Pk4OZNCMj2kVO5e3xJS3CGvKPPSL2A4d6ccHf39p_-gIc5gZiijaf2VtGX-YTy9mAqiiCh39Avt88DVHJu1xBl_dzVC9.png)
            - wait()→The calling thread is suspended (enters the waiting room), the monitor lock is released. Throws an InterruptedException. Is only allowed if owning the monitor, otherwise IllegalMonitorStateException.
            - wait(long timeout)→awakes after notify(), notifyAll() or after the timeout. wait(0) is equal to wait()
            - notify()→Awakes one random thread in the waiting room, which bring it to the entry room, making it compete with the other threads. Is only allowed if owning the monitor, otherwise IllegalMonitorStateException.
            - notifyAll()→Awakens all threads in the waiting room. Is only allowed if owning the monitor, otherwise IllegalMonitorStateException.
            - Two-way condition synchronization→In the previous cases the producer didn't need to wait for the consumer, but this can lead to overwhelming the consumer. e.g. Log-messages from different sources are saved to a log-file.
![](https://remnote-user-data.s3.amazonaws.com/YQoNDGX4kyId1onNktIIxDaIMRpEQ-ErIkxZoShXgxEd-zgZGPUpuBiacW3cqcvXIL3uziFJ2hq8l0F8oPxcjYIJ3rtZ6Cvzmga9wBROfb3hwEfMGvblm3P54_onM8VF.png)
            - Monitor Objects and the thread lifecycle→![](https://remnote-user-data.s3.amazonaws.com/bAh0vpoKJR6lMaSAF-Cn7Eq_6p0sSpk2Z3sNeJx8n-CP7Vg19tfneADRbyiuV38PkU5TpjQzhKiNF8HhvCyh7SNsjNfwh29rKLzU-VCcHRjK_LIegSfyxUzO-SeTDwCh.png)
            - Advantages of a Sync-Monitor Object approach→The synchronization is concentrated in one place, which leads to better software quality and less errors.
            - 
    - 3.2 Deadlocks 
        - Synchronized Queues→Extends the shared data object to a queue of dataobject. The producer fills the queue while the consumer retrieves it. The consumer has to wait it the queue is empty, while the producer has to wait if the queue is full.
            - Single Cafe Example→A cook operates a cafe, where the the customers place order on a ticket holder, with limited space. ![](https://remnote-user-data.s3.amazonaws.com/xP6RGwqaAxRktP0FvXgORMSwpm6NjXix5qTB_JWO6Ejs_FDKc5hNRoFHogUzJOLaT2kUjAh6ORYR294yEQ-ilrpYEXJCAOeRuhKiha7KdRHpukHyjBNT-pKdT61igKaK.png)
        - Lock & Conditions→Extend the monitor object, by adding more waiting rooms through locks and conditions.
            - The problem with one waiting room→If we have many different threads waiting for different types of conditions, all threads need to recheck their condition when acquiring the monitor, even if it might not be done yet. Therefor all threads go back to the waiting room except one.
            - Lock→The object for mutual exclusion.
            - Condition→contains the notification methods and belongs to exactly one lock.
            - Codeexample→![](https://remnote-user-data.s3.amazonaws.com/BHTh2Yb4zuQlCwBn4y_s41f4zanffZYpIVjrcr2hCdSR9SsPVgVoUEuXMgipGjxlWfgV0t534qq7_dGj7GpiY1Tg1BgTYHXa_O2zP1jSp5m681u2zdet2NxonLQdnw0B.png)![](https://remnote-user-data.s3.amazonaws.com/5oyWZLfP6GLI8vFueM8vIjC_UmxXZlt0AfIkEIVEEMo4qPZyLh4cQ-g55l2HINU8pHrzqHnV41WxoJCYAnVxYSUePoAB2u2YqjMuT0dZR1O-p-He6FvT62r-VK-xvLmR.png)
            - Different Access modes→It can be useful to differentiate between access modes to shared resouces. Writers need exclusive access, while readers allow multiple accesses. ![](https://remnote-user-data.s3.amazonaws.com/GXd0Zq3IUW60eNh1-Z6k8f3bBXpFPf0HPRpo7yZrn2oUaYpdrQczMPyidth1YyViGzVIzaSMEwXOqY45Gg64ZMZUreusPzbLDPP4CMPBNWUFMOpJJuQIZ7zo0NE0dd0B.png)
        - Deadlocks
            - Problem demonstrate on the Account example→Two accounts transfer money to each other at the same time, both block themselves, waiting for the other one to unblock. ![](https://remnote-user-data.s3.amazonaws.com/9vkj6xsEJk8-PtUMf4I7FdldbTZjIq1uu3qNwAkIVG0IxNLGeVR2MPiZa3_sLqsCI6DUoXMYyuY7DXQ_v9wUIW91Pr8wfJfMdsY0bhiyxsUr2t7y9aRq8BGfy5t8Sqkm.png)
            - 4 requirements for a deadlock>>>
                - Mututal Exclusion→Each resource is available only once.
                - Hold and Wait condition→Processes which are already blocking resources claim additional resources.
                - No Preemption→A blocked resource cannot be taken away by the OS
                - Cyclic waiting conditions→A chain of processes exists which are waiting for a resource, which is blocked by a successor in the chain.
            - Prevent the requirements for a deadlock>>>
                - Mutual Exclusion→Not possible without shared access problems
                - Hold and Wait condition→Tricky but possible, not natively implemented in java but possible with C on windows WaitForMultipleObjects.
                - No Preemption→Not possible due to missing support in Java.
                - Cyclic waiting conditions→Yes, global ordering of the resources and claiming resources at the same time. 
            - Account example solution→Solved by making the order of blocking accounts the same in all threads. ![](https://remnote-user-data.s3.amazonaws.com/OS6zi1T76qMFRfNqK4vwoz7Lnkiultnmw6Xi31DedYoPVHyJniaJ8wIDUUlEHyI3gnvsgHC8n3YMHySv4vJqxjM1yyM5oUPCWYqYIAUhNrmY7cXQmfWh7_aEDU2tv9qd.png)
            - Dining Philosophers→Problem in concurrent programming where a group of philosophers sit at a table and eat, but can deadlock if each holds one chopstick and waits for the other, since there are only 5 chopstick sticks for 5 philosophers. Implementation: ![](https://remnote-user-data.s3.amazonaws.com/Hk5MIPimE3niSh0mO7CfHw1FDuT4XhrtTw9GYoKT1XmvWuXocMGdYv5TN2XXu3cdeTRP8ZVEuDhYNNGMVivLsIUp3ulrlUOq4LCF_zm-aywv8aNrJx8vUOWXangnzfok.png)
            - Dining Philosophers Hold and Wait solution→Pick up both sticks at the same time, by changing extraction from stick, to stick pair.
            - Dining Philosophers Cyclic waiting solution→Make one philosopher take the right fork before the left fork, while all others go for the left fork first.
        - Annex
            - ![](https://remnote-user-data.s3.amazonaws.com/tjQftRjRHJB57E1ESXusQerJnyKQrKkxBfqSuOx-LsCd5su_mHAbb4V_VM20wPouoii_fZFL_l9wPwbg02-eBkF5rFk5FZJhbBajuz4eG3Sb_3eqMikijUuqOJubIShQ.png)
- 4. Mock Testing
    - General 
        - Psychology of Testing→Testing is the process of demonstrating that errors are not present, by executing a program with the intent of finding errors.
        - The five principles of tesing>>>
            - Specification of Input and Output→A test case must consist of a description of the input data(state) to the program and a precise description of the correct output.
            - Separate Creation and Testing→A software developer should not test his own programs, due to his possible misunderstanding of the problem statement or software specification.
            - Completeness of Tests→Tests must be written for invalid values, as well as valid values. Test cases representing unexpected and invalid input conditions have a higher error-detection yield, than test vases vor valid input conditions.
            - Testing is an Investmet→A problem with interactive systems is to test programs on the fly. They get forgotten and cost, time, money and ideas. Use atomatic testing, running them again after changes is known as  _regression testing_ .
            - Error Clusters→In the typical program some sectinos seem to be more prone to errors than other. ![](https://remnote-user-data.s3.amazonaws.com/BAX3THo2bIV12PHsV8zah09Oaq_yVWjUvJSixsyodzkFpNmgyZofaArrst9tqTlHzM3XOyQsvaEY3BAdWb6dUN3s3Z8pgJmcxDuW35_iwUX5reOXm4yOVVSRKVnCDisV.png)
    - Test doubles & Mock testing
        - Test Double→Any Object or Component that is installed in place of the real component for the express purpose of running a test
        - Unit Testing→Used to test individual units of a program. One class in OO programs.
        - Class Dependency in Unit Testing→If Class A is heavily dependent on Class B, we cannot use the whole Class B, since it would rely on a correct implementation of Class B. It would also be more time-consuming, especially if Class B is very big. 
To solve this problem use a test double for Class B, which provides the minimum necessary function for Class A to be tested ⇒ Test Isolation ![](https://remnote-user-data.s3.amazonaws.com/B_ZOLN6rrJTbnO5u2Szy4G8kE9AuqvUhIU3LHERz05LmSxckk9qa2-EaQhEKIWmcCUsqXCX-s5si09huIzhEH3D3a24-ccI14HLOAtY_v6eSfGAFGoqpB60LkhKj327U.png)
        - Types of Test Doubles / Mocks>>>
            - Dummy→Only used to fill parameter lists, it has no further functionality e.g. to test if a constructor throws an exception if parameter 1 is null make parameter 2 a dummy.
            - Stubs→Methods returning void have no implementation, methods with returning values, have hardcoded values.
            - Spies→Spies are Stubs which also remember what was invoked.
            - Fakes→Objects that have working implementations, but are simplified versions of production code for testing purposes.
        - Testing strategies>>>
            - Black-box testing→Makes no assumptions about the inner workings. Only the interface of the class is known (public fields & methods)
            - White-box testing→Information about inner workings is known, test values are selected to exercise specific control flows.
            - State testing→Does the Class Under testing (CUT) have the correct state and produces the expected result, independent of getting there.
            - Behaviour testing→Use spies, to test if the Class Under Testing (CUT) interacts correctly with its environment.
        - Stub Usage - Warehouse Example→![](https://remnote-user-data.s3.amazonaws.com/oTLB9-OODFRXRhKRdv3y4xtjJtmX0EdVr5U-ufNholosL87Cjdg8CTOxGSJfvNATZ9ylh_5lTtzga8SzZjnTU-9Xz-dFkz9p1p2yYaGTon4xCNJBugKwIp76Nw_m2c-d.png)![](https://remnote-user-data.s3.amazonaws.com/7b7pG2Y7W4eBEPpwFqU-YwQK6PtpXZ1vDuW2evRtL5KMb4Qno-POUACuM7XiOm2VeFzjgGw6tJ6CO7Lu2QnBV3jULmIXiSF5GQBZtrQl0ea3ESXfiEas5MIBP-pbLbx3.png)
        - Mock Testing - Warehouse Example→1. Create a mock object for the interface or class we want to simulate. 2. Specify the expected behavior. 3. Use the mock in testing as if it is a normal object. 4. Verify behavior and state. ![](https://remnote-user-data.s3.amazonaws.com/XtjWuTLUqvtDMzkUN4YrNTWkp9hB_sgfcRgBx_YNt_o2Cce3VdK-aba-LIOlN_X6mrS2oC6YDRBslOWtspciFHtPoa_5t_N3a85ABujXyEaLzkcruZ4lyuTZplNiGN-U.png)
    - Mock testing using Mockito→Allows us to create mock objects dynamically, instead of writing our own test doubles.
        - Documentation - [http://site.mockito.org](http://site.mockito.org) 
- [http://site.mockito.org/mockito/docs/current/org/mockito/Mockito.html](http://site.mockito.org/mockito/docs/current/org/mockito/Mockito.html) 
- [https://dzone.com/refcardz/mockito](https://dzone.com/refcardz/mockito) 
- [https://www.martinfowler.com/articles/mocksArentStubs.html](https://www.martinfowler.com/articles/mocksArentStubs.html) 
- Pragmatic Unit Testing Book

        - Mock object initialization→MyClass myClasss = mock(MyClass.class);
        - Mock return values→when(myClass.getValue()).thenReturn("value");
        - Verify mock behavior→verify(myClass).doSomething(); verifies that doSomething() got called exactly once. 
verify(myClass).doSomething("param"); additionally checks if doSomething got executed with param as aparameter. 
verify(myClass, times(2)).doSomething(); checks that doSomething() got executed twice. 
never(), atLeastOnce(), atLeast(int), atMost(int) can also be used instead of times().
timeout(int) verifies the method got called within these milliseconds.
        - InOrder Object→Is used if the order of the behavior should be verified.
InOrder inOrder = inOrder(mockedList);
This object can use the inOrder.verifyNoMoreInteractions(); method.
It throws the VerificationInOrderFailure if the order is wrong.
        - Stubbing in Mockito→when(myClass.stubbedMethod(value)).thenReturn(value);
doReturn(value).when(myClass).stubbedMethod(value);
If not specified the methods return default values, like 0, emptyLists, mock.toString() or null.
        - Consecutive Stubbing in Mockito→when(myClass.stubbedMethod(value)).thenReturn(value1).thenReturn(value2);
when(myClass.stubbedMethod(value)).thenReturn(value1, value2);
doReturn(value1).doReturn(value2).when(myClass).stubbedMethod(value);
doReturn(value1, value2).when(myClass).stubbedMethod(value);
        - Exception Stubbing→when(myClass.stubbedMethod(value)).thenThrow(new Exception());
doThrow(new Exception()).when(myClass).stubbedMethod(value);
Then use assertThrows() and assertDoesNotThrow()
        - Stubbing with a callback method→oAnswer(new Answer<Integer>() {
  @Override
  public Integer answer(InvocationOnMock invoc) throws Throwable {
    return invoc.getArgument(0) * invoc.getArgument(0);
  }
}).when(myClass).square(anyInt)
![](https://remnote-user-data.s3.amazonaws.com/Zmc2fIJgXRQYRJpDqrZ26RJGwXFYohN3uA3rnwPhNehX0RQmX838vVJVVt7szdka3y2x3ksMIJnJC1YVmep-RUrIZ-kBwM4ZtOJ0u1XLGnfVz0ozLnOt7W0I9XWIMmXa.png)
        - Stubbing using Argument Matchers→It is possible to return a defined value based on a range of arguments. ![](https://remnote-user-data.s3.amazonaws.com/dzY4Z520AMEbDa056zMRol4pt0feRhdxNGdbG3WQhPJPo5geooS43URA2jVZIDIJEBFRf-69xcie9x-g3S7lkjOaFWKof3lSDgxB2sNTFuYJU6woMZwDGukXtGClj7Qc.png)
        - Spies in Mockito→These can be used on a real object, to only partially mock its behavior.
MyClass myClassSpy = spy(myClass);
All methods which are not defined in myClassSpy are forwarded to myClass.
![](https://remnote-user-data.s3.amazonaws.com/cxfCVF-rPT1OirFLWXbzcnr7upm8BiAZy1FedaZmHoKU2MvGiAsXBf5vOT91QYDCnb02N5OhOiE_tX4ZiE2kEAb6s1Dccu7IR_KbtN8ozbVlfF78NYR0OxKarw_BiQw2.png)
        - Annotations→You can use @Mock or  @Spy to annotate mock properties and let the instance get generated automatically. You must add @EdtendWith(MockitoExtension.class) at the top of your testclass.
    - Annex
        - ![](https://remnote-user-data.s3.amazonaws.com/FRlfGXZNRo34_cymDSyzCj8JXF8M6zOrPUK5ck3mvo1IajAsD61neVUYZqm5PLNVB9b1VvobpggGWlsRrl4RAbSynHL2J-U7YpYZoF-KOADp7VaxfpCbMk9Pzwynh5tP.png)
        - ![](https://remnote-user-data.s3.amazonaws.com/DImwr2r5TRujlmkpkF-3qaRZfoHhaGgxKX_4HdZueJI1rcsmIo_KSO0LjI1OiSeXvs7RVWS4Et04bf8V8HcpQcIklcvG0rd-qzn_VYhXcSr2gTbyJY2C8r4fYhF_-qFi.png)
        - ![](https://remnote-user-data.s3.amazonaws.com/QFHOP8WZdthVU-pWaBmy58dI8Sh60Bdfc8lilbD4LQOQ5IXs-CxG_HR4Oojk7ciHOlALP6jVJpXo2XffIwuxJgH9v_M6n46TkG8xKmGRl72Tdc_QtHJ5hb4VfIWpMQ4H.png)
        - ![](https://remnote-user-data.s3.amazonaws.com/75pAjlNjLIofUWqmqHeQtqos_vlI_4x7tmOkD3fMr3_3qOLfX7Nfq-jlqkqwbuaIrOUU9bLj1aBG15t1ExgXsOqiI5zLVtLNO4D4iuPL9gUAo9A69FYOCbiWdtKSlMve.png)
        - ![](https://remnote-user-data.s3.amazonaws.com/SQ5856G26Sm6TYJ7ldkFpC8Ga1aImYlQoZHPBsw2tuJEvfaIoVMF8g2fS2QUTxsuxKDxsVcg3HCafrt5kacQYtjW8bvOG-VNeBysTnChUEgCSLbnPFSXPFEr0zGxf8XL.png)
- 5. Input Output
    - 5.1 File-Streams
        - Working with Files 
            - Filesystems→Used to organize and store data on a device. The implementation of the filesystem is defined by OS, but there are many types to choose from.
            - File→Contains data and metadata (information about the data). They come in Plain files, folders or links to other files.
            - Filesystem Hierarchy→Files are stored in a tree style, with a root node (directory) and folders as branches. A file is identified using its Path from the root directory. Separators between directories is OS specific. (/ for windows \ for unix/macOS)
            - Path→Can be defined from root directory as absolute path or as relative path. "./path/file.txt" means from the current directory "../path/file.txt" means from the parent directory
            - java.io.File
                - To initialize and declare a file object→File file = new File(System.getProperty("user.dir") + File.separator + "demo.txt"); 
File childFile = new File(file, "childFile.txt");
                - Access all children→File[] childFiles = file.listFiles();
                - Access meta data→childFile.getName(); childFile.isFile(); childFile.isDirectory(); childFile.canRead(); childFile.canWrite(); childFile.canExecute(); childFile.lastModified();
                - Access parent→childFile.parentFile();
                - Delete and Create File/Directory→childFile.createNewFile(); childFile.mkdir(); childFile.delete();
            - java.nio.File→Stands for new io. It improves on copying and moving files and further functionality. It has two main libraries java.nio.file.Path, which represents the path to the file in the Filesystem and java.nio.file.Files containing static methods to operate on files/directories.
                - Creating a path object→Path.of(String path); or childFile.toPath(); There are also many methods to look at the path and its components.
                - Even more .nio methods
![](https://remnote-user-data.s3.amazonaws.com/CVn34tDetV7mgIaOW0Ru9spEBCjf_Y4sr-6dZkBL5UyF5wznvbhhIYzZhCh7ZHGKD190v583Ntlfp0rcgfIjJEaC4U_JVbePL9_fpS6OfUkdm2qF2A4p1WS-i7VL6KVe.png)
                - When to use io vs nio→First of all io is not deprecated, nio is just newer and usually preferred by todays projects, due to its more complex functionality. They can always be converted path.tofile() file.toPath()
        - Reading & Writing File content→Read and Write operations are performed through I/O streams, which can also be linked to physical hardware. They provide an abstraction layer to shield the programmer from low-level details of input and output.
            - Input- vs OutputStream→InputStream.read() and OutputStream.write() ![](https://remnote-user-data.s3.amazonaws.com/L14xntktzsFAGKXQRfziB28KWjO2mgvswpASOT7vOaJpIN_knrsCzp23P6grATpO3k938rEo3IYwQ9EfAgKtg6nV5vfJWTM5DzIb7B9GDRuPGrDheccCfDgtvBXzlodh.png)
            - Sources and Destinations>>>
                - In Memory→ByteArrayI/OStream
                - Inter Thread→PipedI/OStream
                - Network→SocketI/OStream
                - Files→FileI/OStream
            - Open and Close a FileI/OStream→1. FileInputStream fin = new FileInputStream(path); or:
FileInputStream fin = Files.newInputStream(path);
2. Catch the FileNotFoundException and the IOException.
3. Finally fin.close(); (To free memory space and finish all write operations)
            - Try-With-Resource→Closes the stream without calling finally.
try (FileInputStream fin = new FileInputStream(path)) { 
      return fin.read(); 
} catch (IOException e) { System.out.println("Error: " + e.getMessage()); }
            - Reading from / writing to files→![](https://remnote-user-data.s3.amazonaws.com/q0G9gutZzHke1_a4s9DV_23pPRiOcnxGpBQCwaZuOi1d9x7okJOLKP2k-vntMn1veF2QJfYgRCgtaaRcJaFjhIhrAoY7BurfnHIp7mGPFLohtXJrFb2_pAeaGdzhle92.png)
            - DecoratorStreams→Are meant to be wrapped around normal streams for different purposes. This wrapping is also called decorating, see Decorator Pattern. ![](https://remnote-user-data.s3.amazonaws.com/l0nj51q3-LBTqgrwJOrqvOrSB6W2xy9lsADbW7hH5DjBS8dRsgC0T-g9RifchPizff4wjzOWBM6Xo2Sw8cmlWLcoK2HyxI94LIZpNuo6ldRu3gOhr8mT0fvtM2y5yjhw.png)
                - BufferedI/OStream→Buffers data optimally for slow devices.
                - DataI/OStream→Adds functions to read/write basic/native data types.
                - ObjectI/OStream→Serialize objects to stream, deserialize them from stream.
                - FilterI/OStream→Base Class for other decorators overriding methods to process or modify data.
            - Buffered Reading and Writing→Buffers larger chunks of data to reduce slow IO-Operations. It uses the OS' caching capabilities to enable this. ![](https://remnote-user-data.s3.amazonaws.com/7iwdZnc8hM53mh6n7geBLW0cQ-5C8_PAUyeBNZRkm9vRoMRRnj2PNudx9TOWMHuqz16MkfMFD_j1Fe5RQeFHseydbgJjBVens1Ckjat2zL8CmAeWNFY9kszlzkV_O8f8.png)
            - CharacterStreams→An abstraction of the Byte Steam, but needed since bytes can be encoded differently. To deal with this concept, java offers Reader.read() and Writers.write().![](https://remnote-user-data.s3.amazonaws.com/WKi2rNku-4mIuwVPuLFzrpiiEuhcfZ5CS2IG1NtdEoHNva0F2uItBu-m9U7BCIYJK5-Kv4awMr64goqbXqI-tmQVbChRsaeINLs0ycLuYzf0x4iGK0f3N5jsnoXNsTnR.png)
            - Readers and Writers→1. FileReader fr = new FileReader(path, Charset.DefaultCharset());
2. int charValue = fr.read();
3. (char) charValue;
4. If charValue is -1 it means that the end of file is reached as usual.
            - Character Sets→It is essential to define the charset in the Reader. The charset defines how the byte will be converted to a char. 
java.nio.charset.Charset; offers a few methods like:
Charset.forName("UTF-8") - returns specified character set object.
Charset.defaultCharset() - returns the OS' default charset.
Charset.availableCharsets() - returns all available charsets.
java.nio.charset.StandardCharsets contains also a list of default charsets.
To convert charsets use this code: ![](https://remnote-user-data.s3.amazonaws.com/xmZ6NCvSV6gIEXMAl8KUnszbluRgY5SBblCm_GLJTl-HSKxRSyJRmlsmxviCRr3hTQLFsNa2oKOFm50vDL1qjJPKI18Ug3B1w3yfvY-KXGCcIub_tpdVKbJTNrSDIP3L.png)
            - Converting different Streams→Use decorator patterns to perform something like a "Dreisatz" in math. After defining the Charset you can use the method; reader.transferTo(writer);
            - BufferedReader and BufferedWriter→Similar to BufferedStreams, they cache some characters and allow to read strings instead of chars. They offer methods like readLine();
You can also use Files.lines(String path) for the same functionality. 
        - Decorator Pattern→Used to add additional responsibility dynamically to an object; new features and modified behavior. It is done by wrapping an instance (component) of an object and adding functionality (decoration) to the methods. ![](https://remnote-user-data.s3.amazonaws.com/vErdKxvcKi6wXt2cTPc7_pUL30LCWVTnNKBDXONi1uDU2wD7rtXCcouV7lcVQPtu8B_xI6NhaUYbhx4FP1vdKWt_1XwCFNCjE0DKOwDCQ530_aDpVEc7dWHRx_mEh7bj.png)![](https://remnote-user-data.s3.amazonaws.com/QM3oPuzT02uP4-9tyaP440fDFH-WpSG5mXqSAv6K5E3_0vhcjLnOoqCMWoni_Am-tfaVE322WxbB8Df6PWPHghHyZhKX6_y3Z4-jQhAZlR1ennInCnq3Ts7wSl9l0u0Z.png)
            - Examples→StringBuilder (not quite, because it doesn't keep a reference to String and only copies the content into its internal character array), PrintWriter ![](https://remnote-user-data.s3.amazonaws.com/P7ii3254NbiKBNDu9ysVqhpent7jinAHDC9RofWFWqqpotP_fnzkwe2AYYb7Vo2L04VFcYk4vtH4HJqU-1bL-JHmJtEof1VgG3fLiFL6a1hZloLDXfSzv7f4NPeo8PbJ.png)
            - Predefined Streams→All java programs implement java.lang package containing the System class. System.in refers to the keyboard, System.out and System.err to the console.
    - 5.2 Advanced
        - Positioning & Random Access File 
            - Positioning→Read/Write operations always start at the beginning of the file. 
For reading InputStream and Reader allow skip(long n) and available() which returns an estimate of the number of bytes/chars.
BufferedInputStreams even allows to mark() a position and get to the position with reset().
For writing there is no possibility for positioning, you have to overwrite the file and append by using a temporary file or FileOutputStream(File file, boolean append);
Example:![](https://remnote-user-data.s3.amazonaws.com/dJUeQJYddf-cNIPjjc55Jx9EGQWjmCP8yfeGybfJHlzP_1VRlWmGeMYmeNesPCYbyoeAdHHiyUJnMY2qP9Pl6Pae0QNYa635rX9B29TVhbFfgkVMiDCiRFzs16TfBCXl.png)
            - Random Access File→Behaves like a turing machine on the given input. The chars or bytes are marked with a cursor. seek(int) sets the pointer to the given position and skipBytes(int) goes forward for the given amount. GetFilePointer() returns the position of the cursor.![](https://remnote-user-data.s3.amazonaws.com/AY6mOQ9fiZSlrBcbiVFrFyo3BHk1zLRgpvqN80z_rl-xoJhLSivqOfWP1oYT4mdc1JSV07ulvKt6z46dVXWIfTjPmLZ2ag_2uOTWh9cEncKYdJ-g3Tmvvsd3q5we4mBd.png)
Reading and writing moves the file pointer to the next position. Inserting is not possible only overwriting. Writing at the end always extends the file and moving the cursor over the end throws an EOFException.![](https://remnote-user-data.s3.amazonaws.com/AvSq2e_yVtC-ME90pdt764xLvomN0TZZ5CctMFKiwiRqm51V9X7UKERecuAhMpRu_xcJHBsIeeaZiITRXz2sEs5VXeav8UpI_7s1QVvjHcftTtZqGQg25nyO16_PmgvO.png)
        - Java Object Serialization / Deserialization→Converting objects into a byte stream / Recovering objects from a byte stream.![](https://remnote-user-data.s3.amazonaws.com/XecYnwO-IbcwzV0SljBYM4lRhds6c_WHLkkxI1ZO51c08GVi4_DKdLj7IRLptyOnThpda2h9igILu31eaX2C79t3ckKD62QnCF05BCZ6DbS3d5NTkefBCKwWxnBsIgN1.png)
            - Use Cases→- Saving/Loading the state of object graphs like Documents or User Configurations. 
- Transfer of objects over a network connection.
            - Object Streams→To use the ObjectI/OStreams, the object to be serialized must implement the interface java.io.Serializable. It is a marker interface and does not declare any methods.
All the objects in your object also need to be marked, otherwise a NotSerializableException is throws. Almost all base classes are Serializable.![](https://remnote-user-data.s3.amazonaws.com/6h1MVIaNBEnJpsau7xpciX5Glqtpcje5YtcMPV9tzjm7UfGdO3Ks8Ada4rkGd1JdD9xyToZHQylUL3TQZyoNkRVzbpZisr0-OlAgqLw8C_KzQ2JMSi7KET8t06qjeHQD.png)
            - What is written in the stream>>1.
                1. Magic Number: AC ED
                2. Current Version Number: e.g 00 05
                3. Class description of all serialized objects. ![](https://remnote-user-data.s3.amazonaws.com/nnbm_nbW3RIoRUoSiidvLEsfHv2OywBOuqaX-XXGyTCaccagG5xkAynUaEvRZGXL4fcMvYBttWXVBGJnsFMtOsoS1ShZLrHjaktUodVZ91D8csrhHqtG9OOc-zyvDrIL.png)
                4. Values of the serialized objects. ![](https://remnote-user-data.s3.amazonaws.com/P1u114wJU-hEBF_LvRLFujfWRlziwEbYCW2Z6t1gwMWRyYtNtDgAffcWlUZImGaxKZte6Mp_y0BlvqKop6jBwxDFTnSC-4mMhgveqbd8Kj91isrRZjU59lqJupq98Rj4.png)
            - Transient fields→Some datafield make no sense to serialize. These must be marked as transient (private transient Date createDate;) and initialized in the default constructor. Other examples are: Network Sockets, Database Connections.
            - Interoperability→Java object serialization works only in Java. To pass to other programming languages use standardized formats like CSV, XML, JSON...
        - Java Resource files→Often it is required to access resource files which are part of the application like images, audio, text, configurations, FXML-Files. ![](https://remnote-user-data.s3.amazonaws.com/zSr7uuUKheiMIcMcdngt9aHqOIOE59J17HMTl-Hlr8MO3HGgTINW7nzBR2eGH_Vw6yFotgY8VQJnJem9SrlkuyuIj1eMW9HIRGVErTieofJulqO7z3EtWtNo3Ip85DPk.png)
            - Accessing Resource files→![](https://remnote-user-data.s3.amazonaws.com/xYqiesQItN0qWYuDG8xpkgade0fqxjGdzT4DcZWP5bqE_VjBGwFqjPedSSJmBZRNedhS2ItwechY8huat6UpDFB1VkeXRPnGNyjEdBt-EWL36YKgd-vUNaWmfYkQPl1q.png)
        - Java Properties→Are a type of resource file that stores key-value pairs. ![](https://remnote-user-data.s3.amazonaws.com/xclf5mj7dOFFIhApWyFL8XTNNRFlVFEAJ6iGieVRT8uMGii6hd9w8Ipg3vGUeny61eKk9d2EkYIovrGNWSKRNzRNpH1hUuTFppbO-zCOvtPNIUy1tDtMfESUBJRjCfjg.png)
            - Use Cases→Configuration-, Settingsfile (e.g. textio.properties, log.properties)
Language Resource Bundles (Messages_en.properties, Messages_de.properties)
            - Format→key = value (or) key : value
        - Logging→Used for Debugging and Alerting, by writing messages that descibe the program flow into the console or the file. java.util.logger
            - Loggers→Collect the messages and create the log records. A log record contains meta data like timestamp, sequence, number, thread.
            - Levels→Represent the significance of the log. java.util.logging.Level contains general log levels. Their significance is ordered by an integer. SEVERE(1000), WARNING(900), INFO(800), CONFIG(700), FINE(500), FINER(400), FINEST(300).
            - Handlers→Loggers send its messages to 1..n handlers. They write the messages to specific channels. Formatters convert the log record to a string, while filters reduce the amount of log-messages depending on the level. The same handler can get messages from multiple loggers.

                - Types of handlers>>>
                    - ConsoleHandler
                    - FileHandler
                    - StreamHandler
                    - SocketHandler
                    - MemoryHandler
            - Obtaining Java Loggers→The Factory Method Logger.getLogger(String name) is used, which creates a new instance if the name is new, but an existing instance if the name already exists.
![](https://remnote-user-data.s3.amazonaws.com/HAPcD6PT3o-WM5stMcHEbmHA861umu1Ex3fm_WkSBAhEcOkehhwfNIkiDVuKu_yOta0y2hp2ecnkzsvbOocSaXyQtEcjEUPAQxvvXbbmJkoo60w14DiuoVm93BwGaGSe.png)
            - Creating log records→ogger.log(Level level, String message, Object params...)
message may contain parameters {0}, {1} that are filled by the params.
logger.log(Level level, String message, Throwable t)
For the predefined levels, the logger has:
logger.info(String message), logger.warning(String message), logger.finer(String message);
It also has log methods specifically for debugging:
![](https://remnote-user-data.s3.amazonaws.com/DL_L5mVbGaCiOcPelirMaq5YHGkzsCXCQlhhuDlpaqnqpi0q2bYc3SE4hfGdks-MDJIY1kGPmK5cgMjWivqbP1OSGAYwx18ZHbJDaf5A-Ic36-Dizcfo0MnYSNXzXdwX.png)
            - Default Log Levels→Logger has INFO and Handlers have ALL.
            - Supplier function→To prevent time consuming log messages to be generated if unneeded you can wrap them in a if(logger.isLoggable(Level.FINE)) or even better use a supplier function which only gets called if the message is actually built. ![](https://remnote-user-data.s3.amazonaws.com/WWIJzna52GVtI5MRxWJsq2Ys41nOHKhYPk5mxkqctRaFIKwTfo_7-thVt0X8-rDiTiNKhAkctwvUPRGRYmFPCZdp3t7rhF3erXgxzpvLA4ER0TxoB_Dv8mDOfELjv1xZ.png)
            - log.properties→Used if the standard logging configuration is not used. ![](https://remnote-user-data.s3.amazonaws.com/X6VyhvUrQ2Bs-0ICM3b7fRTSCk5FGxXKoaBkCuo7ze2I7ZI8aSVPZDdIGJ3OJ6KwfdwYe22iMHfq328Z6zN0yGM9mElwk5d5MMZvWl9VTtfBw2ZiF0AluMe-7BjpLcE_.png)
        - Annex
            - ![](https://remnote-user-data.s3.amazonaws.com/LclJanvynMzU-nzER0Mb4RlxPlAGKWG9_q9L6q8KOLs5sGjHtOzYxkd-_pLEn6P1tmEVPdp7JgTmMGXrk9990mPeMZ2lIllNuUTRxem_O17IMJkiayHn5_Y1Vj5crEtf.png)
- 6. Functional Programming
    - 6.1 Functional Interfaces and Lambda Expressions
        - Functional Interface→Shortens a java method declaration by using type inference and the operator ⇒
            - Type inference→Type inference is a Java compiler's ability to look at each method invocation and corresponding declaration to determine the type argument (or arguments) that make the invocation applicable.
            - Conditions to create a functional interface→It can only have one abstract method, aside from the methods of object. (Aditional default and static methods are allowed)
            - @FunctionalInterface→Makes the compiler verify that it is a functional interface, even though its not necessary for the interface to work.
            - Example Functional Interface Implementation→interface Runnable{
  void run();
}
            - Java general purpose interfaces examples→![](https://remnote-user-data.s3.amazonaws.com/6NuyIbTiznoA0kzKhi81KE1ZnLks7LWtpCItTg8hw1whNPVdK_Amy59sJtmMx3GVzCvmnjqliYwmm01lonDFJDmLTLALR5w7kL1B0e7M0IFz2MKxNsslQ1Gh1NKxCfW1.png)
        - Lambda Expressions→Like an anonymous method comprising: - a list of formal parameters. 
- a ⇒ operator to connect parameters and code block.
- a body expressed through code block {} or an expression.
            - Example Lambda Expression→![](https://remnote-user-data.s3.amazonaws.com/twz-0Hy3LXR0OP9GhMrp92PtWaXyeHFB4yhSLnhQIHdW6eOrFu0Jrc5npzWYHLMs4yeNhvQJdj4YOUlafqsy-2SnmU5oMzuShn7w2BUuapiLeGNHpXinAMPm5ovXO08n.png)
            - ⇒→Creates an instance of an implementation of a functional interface
            - Lambda parameters→Can be either declared (int x, int y) or inferred(x, y). Lambda Expressions cannot declare ^^generic type parameters^^.
            - Lambda Expression Examples→![](https://remnote-user-data.s3.amazonaws.com/WlLPBf_VMWS4HNaNzuC3KR5YYnTLCiUa5Vdo27n_aIGQ5ZMzKH2f-uEtiQBUpUkX6IvWR9g6DlKZl8Hi4FjoGK81ijpIhuyR9ycYt42BxsS8Ei5FDVw4f-OfaKck6lBy.png)
            - Assign Lambda Expressions→![](https://remnote-user-data.s3.amazonaws.com/lP8-m00pC-c213h09YZyA-9ygTFAf4TVWLqYnwLpNQQkbiQ4JWnqVsrsRBPPzTmgsUOyG04iVF03P4XRW3AnzKaLkFGKqWyYAYXsGhdaqrxuuaHCLJRcdPmMK46Siaie.png)
        - Using Method References→Passing a method as a parameter.
            - Example→![](https://remnote-user-data.s3.amazonaws.com/6_zhzzhVMlQvGjcZwCivXvNumZSO0e2YTRG05yzRmSSjUoPnNXh_tlIynPWqzM4J-qM6mIlJAkjlG0I93EbRQWry7SlmuBGKofi9dBT-5UBj_zxq5v4YT_UFo-lgAsld.png)![](https://remnote-user-data.s3.amazonaws.com/WcOos9pYOq708yBu1UkgGfw-OGKLSmez0HkAgGbKj81sEun4N4QSE2Cts32FfHUQX49OPaqNISKTsW5r-tPC4FnP4lwxg-MZ47svTob6JH2To17ZG6RvIJfqo6X_Zuxo.png)
            - Ways to pass a Method>>>
                - Explicitly write the method out: (a, b) ⇒ Math.Max(a, b);
                - Separate the class from method with→Math::max
                - Address method of a specific instance→str::length
                - Create a new instance→HashSet<String>::new
        - Functional Composition 
            - IntPredicate→A functional interface in Java that represents a predicate(boolean-valued function) of one 'int'-valued argument
                - Example→IntPredicate isEven = value ⇒ value % 2 == 0;
System.out.println(isEven.test(10)); //Returns true
System.out.println(isEven.test(3)); //Returns false
                - Methods of IntPredicate→Next to the abstract test(int value) method teher are:
negate(), and(IntPredicate other), or(IntPredicate other)
                - Example using and→![](https://remnote-user-data.s3.amazonaws.com/wr-rut6i8GoP3RXByWR3jABXaddV-2HdWMlnZHRI3kg2rMLbY3stGLCuMSK3snv1pPEXWNRusle41Yb-DPoaNuZ-Jcxf028pAWsQFpHXrklNVXXyFH1hePyURGuv_mm7.png)
            - DoubleUnaryOperator example→![](https://remnote-user-data.s3.amazonaws.com/XHMA7C3pSpWwr22KX32-wmDxGx3W8tVbC4fU9-U9q5jF7tenTDEjoUI9LJHsFjESm58F-MamMYWIobnw5jAUClYUJizueAk5ND5Y3GYb0DOGxHOUJNAmmSyM1ecsUOQd.png)
        - Optional→A container object that may or may not contain a non-null value. It is final and immutable, though may contain references to mutable objects. Do not use == hashCode() or synchronization, rather use optional.equals(Object).
            - What is wrong with null>>1.
                1. It subverts types. e.g. object.toString();
                2. It extends the value range with an incompatible value. e.g. if(string == null)
                3. Is confusing.
            - Get values from optional>>>
                - optional.get(); ‒>NoSuchElementException
                - optional.orElseThrow(); ‒>NoSuchElementException
                - optional.orElse("Hello Optional");
                - optional.orElseGet(() ⇒ function);
            - Methods of optional on Optional<String> string =→![](https://remnote-user-data.s3.amazonaws.com/_88SHAD8r-9sX-PedtF-Fk_pZ-w5vJwyRafgCj2991fWKrzAZJIG2cOkAI55jkYFi_XFXIu7gx6vAGRqhlY2C3MQEAeqA869GDgHUAjanTTEmcpAFPjqfSDhS0_v_xw6.png)
            - Optional doNotDoThis = null→Optional thisIsOk = Optional.ofNullable(null); 
Optional thisIsBetter = Optional.empty();
            - Optional vs Exception→![](https://remnote-user-data.s3.amazonaws.com/hlf-Li31E57Nk24AhFDyWCO7ydmgZMtHE6UkmZT0WPTMutxSUvxI_iwH9hnERtbTcbWUo8MeRiowidhnoOl26GpHjyTZSHHs----TRDbUplnL26EFHlBiZo27OeZizlk.png)
            - Specialized Optional classes→For some numeric primitive data types there are specialized classes. OptionalInt, OptionalLong, OptionalDouble.
        - Summary>>>
            - A functional interface has just one abstract method.
            - The lambda expressions operator ⇒ creates an instance of implementation of a functional interface.
            - Types may be declared or inferred.
            - Package java.util.function contains many functional interfaces.
            - Lambda expressions can be assigned to variables, used in parameters and return values.
            - Method references can be rewritten as lambda expressions.
            - Optionals are final and immutable.
        - Annex
            - ![](https://remnote-user-data.s3.amazonaws.com/3AR4eUgHHq6cKculMaFPNK1oL6dLRt0dYXfSS6LRvRiCL_vkWxEGTeXB3TUivnzUQkBWq_aMjUVIwTUpxhF_YEgMGfgdPUmUWuCjQp3BiXf5vWxmrR9-h9FcN9TVUhIb.png)
    - 6.2 Streams
        - 
        - General
            - Programing paradigms→![](https://remnote-user-data.s3.amazonaws.com/tZYqeocjVTmq67_aplF7nnTVdfVoIUTFKcwIZuc2loYklLbaNHP1EymtFw__rYeyoyzdNL0F-iA2rNLasYsfdQAJByWfihIkReL7rjcOoclkq74JRquqCqP6zmlDzPSd.png)
            - Functional Programing>>>
                - Functions are first class citizen→They can be assigned to variables, passed as arguments and returned as results. (Enabled in Java by Lambda Expressions)
                - Pure Functions→Return value depends only on the input arguments. ![](https://remnote-user-data.s3.amazonaws.com/w1UZZPt0DfumQY9FcgbtzggJve0mvLa14y5cgNmIySOTklcb_B7pnqnxRu9RHmz_UwhraIN61zBosm1XQRtRfQSbeb-9AVCcKBRmc-kzUYdOA3uWuHK2a90zCCjqM8o-.png)
States can still be kept, by passing it from function to function.
- Function nesting. Results of a function are arguments for the next function.
   O2(f2, 01(f1, x))
- Function chaining. Output values of a function are input values for the next function.
  x.O1(f1).O2(f2)
                - Avoiding side effects→Global variables or shared objects are immutable, by having functions always create new objects instead of changing the input values.
        - Java Streams API
            - Imperative coding style→Writing code line by line to give instructions. Iterating through a collection of values using external iteration (e.g. a for loop). Creating local variables and maintaining the iterator. Repeating the same logic regarding looping and processing.
Example: 
  List<Integer> list = List.of(3, 2, 12, 5, 6, 11, 13); 
  int evenSum = 0; 
  for (Integer i: list) { 
    if (i % 2  0) { 
      evenSum += value; 
    } 
  }
            - Declarative coding style→Focus on what we want to achieve, delegating the how to the library/framework. The low-level logic (like looping) is managed by the library. No need to care about storing and forwarding intermediate results. A common set of generic operations can be applied to different use cases. Java provides the Stream API to use internal iteration.
Example:
List<Integer> list = List.of(3, 2, 12, 5, 6, 11, 13); 
int evenSum = list.stream() 
                         .filter(i-> i % 2 ↔ 0) 
                         .mapToInt(Integer↔intValue) 
                         .sum();
            - External vs Internal Iteration→loops or iterators need to be managed by the programmer.
list.foreach(lambda) enables internal iteration to the collection classes.
list.stream().forEach() is the own internal iterator provided by streams.
            - Java Streams→They represent a sequence of data elements. It does not store any data elements. Stream Operations process each element of the stream and generate a new stream containing the sequence of resulting data elements. Operations can be chained.
            - Life cycle of a stream pipeline→![](https://remnote-user-data.s3.amazonaws.com/IrXu7wFgMhqst6UZLt6-HTf0xRkmvmYLTe7i86yNKkE1mpITt_vusaB1JHHaXdOSxZZjn2LpTCK6ke5Vz-LUUj9xfqSKSYlFjgkkTwxrFxShMilWLNvLaaoxgFzMGyDb.png)
                - Stream Sources→java.util.Collection provides two ways of creating a stream: 
stream() - sequential stream of elements in the collection. 
parallelStream() - parallel stream of elements in the collection.
java.util.Arrays also provides stream functionality.
![](https://remnote-user-data.s3.amazonaws.com/AgajZ5Cfe8rQCXU8f6mrllbyl53xzs_MlF8_pdwjywYmw-Mb-yLT85jxxwLZMqMQVDvVN1-PW1MGn9_sVU2uDNQPwuyylF2wHBwyfwjJxvWo501sFf9lqI7ZTGrmJ7KO.png)
And many more:
![](https://remnote-user-data.s3.amazonaws.com/5vimng9klxXFke59354yYNrtm7dNhJ6jvnWwutYbEomOQkPJ9n7vFSVrNoeVj_dzNp46cMm6RR9WyVpsax4-aBT0PRFEOX4TT3e3Niln1eryxVpcFl03Si77KyHpGVPg.png)
                - Intermediate Operations→Transform streams. Receives a sequence of elements, performs an operation on the elements and creates a new outgoing sequence.
Operations should be stateless and must be non interfering(doesnt change the source elements).
Examples:
![](https://remnote-user-data.s3.amazonaws.com/rpc94MvWzeU1QdtS2lmOplllylL9KH6HbP0KAto9_YgrYNP0E4CCAj7ErhLYU7WV1UJKcVi-6z005-L2uLB_sEuRwchqTdGJsYUBeR8S_rKA1G-zzVE2YGooLfIuA3Uf.png)
A demo can be seen in the declarative coding style section.
map() is a method where you can pass your own lambda expression, to transform every element one-to-one. If you want to fuse many streams together use flatMap(List::stream).
![](https://remnote-user-data.s3.amazonaws.com/UVdWTryEAnUDT2TUp21k9FoXLSURlmwdd-ik0cNbSY5kRRMn_9Lxcfv7C3jmTOnA1GcaTVULZX7tMoR3GTXDp617_PXY-ag9KUvNZkO4lG4Pty3a7C0OGZztsO48_tCF.png)
                - Terminal Operations→Terminates the pipeline of stream operations, by collecting the elements and returning an explicit result. 
![](https://remnote-user-data.s3.amazonaws.com/ekRtQlfOuFEF3IntutdJvJQi1wGC7XaM67PHlud_-6IWUSBKt1ovnjv3YnHcm5-t9ldgR82daI3Ycc1DUzYjWqpb3Z1f7Z7ngOIEps9Gc7eKfr-n8v9DhfGMFJ8YzKFm.png) ![](https://remnote-user-data.s3.amazonaws.com/EqP_rS_tVQhKSRXb6SbQxDwZsYErkQPPELggTSu1tBTjXx2h6YJuQR8mFKJ8Cpsgn_zNsHs6v1m21UUABA7L5KTk2YRw3KNADa-LJZWGFCuSRksboNiZNGXkyl4hojr9.png) ![](https://remnote-user-data.s3.amazonaws.com/QZNmeAjxCS100lL584wOn0TTQL0YEvI32pSmhgS6vWBuclEIiaGDCoJs3RYtbtslJbiVLWZvPLMFGwRKrm5xoLZDjPhaNFIQPgvaRS6SbQst0lK2xy8tcqBVdeN9JewO.png)
            - Lazy evaluation→The pipeline is only evaluated when the terminal operation is called. The following operation pulls the data instead of the previous operation pushing it. This allows lazy evaluation, which avoids redundant passes on data, by having the terminal operation close the stream as soon as it is satisfied. ![](https://remnote-user-data.s3.amazonaws.com/r6idDcNkyUkhPqDXaDmstGGEkd3vOC3F2mrVEm_tChsVoN3bMFVhxVbjtwzvapHW_XR6l5yFbH6oHnVh0-zwyc_nwjPxYYQKNyuxVN299PpPv-g2emGvSTgjjGGuncyv.png)![](https://remnote-user-data.s3.amazonaws.com/kVniQn0Hxfnw1tuIuxmDUqhqb9xSljOOdOeL4Gcj8inZqiYCaAzqb9gnYlV8D_cxUa9_UpDkotgl7pXmbcT9Eb3nZN2mATW_QbFvNkiq46vTJTBpTYV3-knUJ3iLdvx_.png)
        - Parallel Streams→We can use stream().parallel() or parallelStream() to greatly increase computational time. ![](https://remnote-user-data.s3.amazonaws.com/wsilXRnCXUjuJU7TLNqjeAZcKfRk2QVoPs2OJFpyIi7ZJhWbhVxh_zyVNttLmS4d4atNVhVmgp79F3ujARtCFfMXin2uYznwbqHjd1ZBMFo8cfiBopqBF44-X207JKCi.png) ![](https://remnote-user-data.s3.amazonaws.com/gYse0Hlm0RQQDXJtxivZh29Vv_Fft0LXr9k2-HdBOQ0RFwYi6sW2hTTikiy6cnEOqZKQxcfJLTgn3CoSMasGxWBok_8flxmhMipitWf5Ppe-KgVAdJI58vl-6-1Odtxu.png)
(isEmpty() removes all elements which are not)
        - 
