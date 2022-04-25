//
//  ViewController.swift
//  HelloWorldRN
//
//  Created by Luca Agostini on 25/04/22.
//

import UIKit

class MainViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBOutlet weak var txtRNParams: UITextView!
   
        
    @IBAction func BtnGoReactView(_ sender: Any) {
            let messageFromNative: String = txtRNParams.text!
            
            let rootView = RNViewManager.sharedInstance.viewForModule(
                "HelloWorldRN",
                initialProperties: ["message_from_native": messageFromNative])
            
            rootView.tag = 1
            let reactNativeVC = UIViewController()
    
            reactNativeVC.view = rootView
            reactNativeVC.modalPresentationStyle = .fullScreen
        
            present(reactNativeVC, animated: true)
        }

}

